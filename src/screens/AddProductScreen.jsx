import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Alert,
  Pressable,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Appbar from "../components/AppBar";
import StockData from "../src/StockData";

export default function AddProductScreen() {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate("tickerDetail")}>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image source={item.imageUrl} style={{width: 40, height: 40}} />
            <View style={{marginLeft: 12}}>
              <Text style={styles.blandTicker}>{item.ticker}</Text>
              <Text style={styles.blandName}>{item.name}</Text>
            </View>
            <Text style={styles.marketCap}>${comma(item.totalPrice)}K</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Appbar title="資産運用" />
        </View>
        <View style={styles.search}>
          <View style={styles.portChoices}>
            <Text>個別株式</Text>
            <Text>ETF</Text>
            <Text>専門家ポート</Text>
            <Text>登録ポート</Text>
          </View>
          <View>
            <TextInput style={styles.searchBar} placeholder="検索" />
          </View>
          <View style={styles.searchTabs}>
            <Text style={{fontSize: 12, color: "#8B8B94"}}>おすすめ順</Text>
            <Text style={{fontSize: 12, color: "#8B8B94"}}>ETF</Text>
            <Text style={{fontSize: 12, color: "#8B8B94"}}>時価総額順</Text>
            <Text style={{fontSize: 12, color: "#8B8B94"}}>
              アルファベット順
            </Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.blandTitle}>銘柄名</Text>
            <Text style={styles.blandMrkCap}>時価総額</Text>
          </View>
        </View>

        <View style={styles.container}>
          <FlatList
            data={StockData}
            // eslint-disable-next-line react/jsx-no-bind
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </View>
  );
}

// 3桁カンマ区切りとする.
function comma(num) {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  portChoices: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  search: {
    backgroundColor: "#F9F9F9",
    paddingVertical: 5,
    marginVertical: 2,
  },
  searchBar: {
    height: 30,
    margin: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#7388FF",
    fontSize: 14,
    backgroundColor: "#ffffff",
  },
  searchTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  blandUnit: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#DADADA",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    flexDirection: "row",
    marginTop: 7,
  },
  blandTitle: {
    marginLeft: 85,
  },
  blandMrkCap: {
    marginLeft: 160,
  },
  bland: {
    flexDirection: "row",
  },
  blandTicker: {
    color: "#8B8B94",
    fontSize: 12,
  },
  blandName: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  marketCap: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    position: "absolute",
    left: 220,
  },
  addButtton: {
    marginTop: 15,
    paddingHorizontal: 10,
    position: "absolute",
    right: 10,
  },
});
