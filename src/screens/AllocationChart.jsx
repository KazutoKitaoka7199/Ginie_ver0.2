import React, {useState, useCallback} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Alert,
  Pressable,
} from "react-native";
import Appbar from "../components/AppBar";
import {PieChart} from "react-native-chart-kit";

const INNER_CIRCLE_SIZE = 150;

export default function AllocationChart() {
  const [chartData, setchartData] = useState([
    {
      id: 1,
      name: "株式1",
      population: 60,
      color: "rgba(131, 167, 234, 1)",
    },
    {
      id: 2,
      name: "株式2",
      population: 20,
      color: "blue",
    },
    {
      id: 3,
      name: "株式3",
      population: 10,
      color: "red",
    },
    {
      id: 4,
      name: "株式4",
      population: 10,
      color: "green",
    },
  ]);

  const addPopulation = useCallback(
    (item) => {
      setchartData((charData) => {
        return charData.map((chartDataItem) => {
          if (item.id !== chartDataItem.id) return chartDataItem;
          return {...chartDataItem, population: chartDataItem.population + 1};
        });
      });
    },
    [setchartData]
  );

  const minusPopulation = useCallback(
    (item) => {
      setchartData((charData) => {
        return charData.map((chartDataItem) => {
          if (item.id !== chartDataItem.id) return chartDataItem;
          return {...chartDataItem, population: chartDataItem.population - 1};
        });
      });
    },
    [setchartData]
  );

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Appbar title="資産運用" />
        </View>
        <Text>配分調整</Text>
        <View style={{position: "relative"}}>
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
            accessor={"population"}
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
              <Text>{data.name}</Text>

              <Text>{data.population}%</Text>

              <Pressable onPress={() => addPopulation(data)}>
                <Text>+</Text>
              </Pressable>

              <Pressable onPress={() => minusPopulation(data)}>
                <Text>-</Text>
              </Pressable>
            </View>
          ))}
        </View>
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