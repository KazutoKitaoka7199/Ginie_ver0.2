import {View, Text, StyleSheet, SafeAreaView, Image} from "react-native";
import React, {useEffect, useState} from "react";

import StockData from "../src/StockData";
import Appbar from "../components/AppBar";
import { prygonApikey } from "../../env";

// 3桁カンマ区切りとする.
function comma(num) {
  return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export default function TickerDetailScreen({}) {
const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(`https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${prygonApikey}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar />
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>loading</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blandUnit: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    flexDirection: 'row',
    marginTop: 7,
  },
  blandTitle: {
    marginLeft: 85,
  },
  blandMrkCap: {
    marginLeft: 160,
  },
  bland: {
    flexDirection: 'row',
  },
  blandTicker: {
    color: '#8B8B94',
    fontSize: 12,
  },
  blandName: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  marketCap: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    position: 'absolute',
    left: 220,
  },
});