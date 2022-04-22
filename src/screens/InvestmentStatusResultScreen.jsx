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
import { useNavigation } from '@react-navigation/native';

LogBox.ignoreLogs(['AsyncStorage']);
LogBox.ignoreLogs(['Settting a timer']);

const INNER_CIRCLE_SIZE = 150;
const COLORS = ["#07124F","#0066FF", "#86A4F3", "#8AD67D", "#B4EFE8", "blue"];

export default function InvestentStatusResultScreen() {
  const navigation = useNavigation();
  const [chartData, setChartData] = useState([]);

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

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
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
              <Text>総資産：{`マイポートフォリオ\n(日本円預金除く)`}</Text>
            </Text>
          </View>
        </View>
        <ScrollView>
          {chartData.map((data, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingHorizontal: 30,
                marginBottom: 16,
                borderBottomWidth: 1,
                borderBottomColor: '#000000',
                paddingBottom: 16
              }}
              key={data.id}
            >
              <Text>{data.ticker}</Text>
              <Text>{data.ratio}%</Text>
            </View>
          ))}
          <Pressable>
            <Text style={styles.button} onPress={() => navigation.navigate('InvestmentStatus', { chartData: chartData})}>配分決定</Text>
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