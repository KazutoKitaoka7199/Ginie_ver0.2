import React, {useState, useCallback, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Alert,
  LogBox,
  ScrollView
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
import { Ionicons, Feather } from '@expo/vector-icons';

LogBox.ignoreLogs(['AsyncStorage']);
LogBox.ignoreLogs(['Settting a timer']);

const INNER_CIRCLE_SIZE = 150;
const COLORS = ["#07124F","#0066FF", "#86A4F3", "#8AD67D", "#B4EFE8", "blue"];

export default function AllocationChartScreen() {
  const [chartData, setChartData] = useState([]);

  const converJpyToUsd = (jpy) => {
    // TODO: USDは動的にAPI経由で取得できるようになるのが理想。
    return jpy / USD;
  };

  const pay = async (jpy) => {
    const userid = auth.currentUser.uid;

    // 予算的な意味が伝わる変数がいいかも。
    const usd = converJpyToUsd(jpy);

    if (userid) {
      for (const data of chartData) {
        // 各株式の price, ratio を取得
        const {price, ratio} = data;

        // この株式を購入するのにつかったドルの金額
        const allocatableUsd = usd * ratio;

        // 最終的な stockshare の計算
        const stockShare = 0; // TODO: usd と price と usd を使って計算式を書く！

        // ポートフォリオを更新
        const docRef = doc(db, "user", userid, "portfolio", data.id);
        await updateDoc(docRef, {stockShare: stockShare});
      }
    }
  };

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
        <Text style={{position: "absolute", left: "40%", top: 80, fontSize: 16, fontWeight: "bold"}}>配分調整</Text>
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
        <ScrollView style={styles.myport}>
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
                <Ionicons name="add-circle-outline" size={24} color="black"/>
              </Pressable>

              <Pressable onPress={() => minusPopulation(data)}>
                <Feather name="minus-circle" size={24} color="black" />
              </Pressable>
            </View>
          ))}
          <Pressable onPress={pay}>
            <Text style={styles.button}>配分決定</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  myport: {
    marginBottom: 100,
  },
  button: {
    backgroundColor: '#0066FF',
    borderRadius: 10,
    textAlign: 'center',
    width: 170,
    color: '#ffffff',
    paddingVertical: 5,
    left: 110,
  }
});