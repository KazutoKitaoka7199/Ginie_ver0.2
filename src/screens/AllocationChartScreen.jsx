import React, {useState, useCallback, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert
} from "react-native";
import Appbar from "../components/AppBar";
import {
  getDocs,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  query
} from "firebase/firestore";
import {db, auth} from "../components/Firebase";
import { PieChart } from "react-native-chart-kit";

const INNER_CIRCLE_SIZE = 150;
const COLORS = ["red", "green", "white", "pink", "yellow", "blue"];

export default function AllocationChartScreen() {
  const [chartData, setChartData] = useState([]);

  function Payment() {
    const userid = auth.currentUser.uid;
    
      // ドル換算する処理
      // stockShareを計算する処理
      // Firestoreに書き込む処理 
  
    if (userid) {
      const docRef = setDoc(doc(db,"portfolio"));
      updateDoc(docRef, {
        price: 200,
        ratio: 30,
        stockShare: 0.3,
        ticker: "TESL",
      });
    }
  }

  useEffect(() => {
    if (!auth.currentUser) return;
    const userId = auth.currentUser.uid;
    const unsubscribe = onSnapshot(collection(db, `user/${userId}/portfolio`), (querrySnapshot) => {
        const res = [];
        querrySnapshot.forEach((doc) => {
          res.push({
            id: doc.id,
            ...doc.data(),
            color: COLORS[res.length] || "red",
          });
        });

        const blankRatio = 100 - res.reduce((prev, current) => current.ratio + prev, 0);
        setChartData([
          ...res,
          { id: null, ticker: "未配分", ratio: blankRatio, color: "gray" },
        ]);
      });
    return () => {
      return unsubscribe();
    };
  }, []);
  const addPopulation = useCallback(
    (item) => {
      if (!auth.currentUser) return;
      const userId = auth.currentUser.uid;
      const documentRef = doc(db, "user", userId, "portfolio", item.id);
      updateDoc(documentRef, { ratio: item.ratio + 1 });
    }, [setChartData]);
  
  const minusPopulation = useCallback(
    (item) => {
      if (!auth.currentUser) return;
      const userId = auth.currentUser.uid;
      const documentRef = doc(db, "user", userId, "portfolio", item.id);
      updateDoc(documentRef, { ratio: item.ratio - 1 });
    }, [setChartData]);

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Appbar title="資産運用" />
        </View>
        <Text>配分調整</Text>
        <View style={{ratio: "relative"}}>
          <PieChart
            data={chartData}
            width={Dimensions.get("window").width}
            height={300}
            chartConfig={{
              backgroundColor: "#000000",
              backgroundGradientFrom: "#1E2923",
              backgroundGradientTo: "#08130D",
              color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            }}
            accessor={"ratio"}
            backgroundColor={"transparent"}
            center={[Dimensions.get("window").width / 4, 0]}
            hasLegend={false}
          />
          <View style={styles.chartInnerCircle}>
            <Text style={{textAlign: "center"}}>
              <Text>{`マイポートフォリオ\n(日本円預金除く)`}</Text>
            </Text>
          </View>
        </View>
        <View>
          {chartData.map((data, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 24,
                marginBottom: 16,
              }}
              key={data.id}
            >
              <Text>{data.ticker}</Text>

              <Text>{data.ratio}%</Text>

              <Pressable onPress={() => addPopulation(data)}>
                <Text>+</Text>
              </Pressable>

              <Pressable onPress={() => minusPopulation(data)}>
                <Text>-</Text>
              </Pressable>
            </View>
          ))}
        </View>
        <Pressable onPress={()=> Alert.alert("入金！")}>
          <Text>入金</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartInnerCircle: {
    position: "absolute",
    left: Dimensions.get("window").width / 2 - INNER_CIRCLE_SIZE / 2,
    top: 150 - INNER_CIRCLE_SIZE / 2,
    height: INNER_CIRCLE_SIZE,
    width: INNER_CIRCLE_SIZE,
    borderRadius: INNER_CIRCLE_SIZE / 2,
    backgroundColor: "white",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});