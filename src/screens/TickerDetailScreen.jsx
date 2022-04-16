import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";

import StockData from "../src/StockData";
import Loading from '../components/Loading';
import Appbar from "../components/AppBar";
import TickerDetail from '../components/TickerDetail';
import { prygonApikey } from "../../env";

// 3桁カンマ区切りとする.
function comma(num) {
  return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

export default function TickerDetailScreen({}) {
const [data, setData] = useState(null);
const [news, setNews] = useState(null);
const [market, setMarket] = useState(null);
const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${prygonApikey}`)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, []);

  useEffect(() => {
    fetch(`https://api.polygon.io/v2/reference/news?apiKey=${prygonApikey}`)
      .then((res) => res.json())
      .then((json) => setNews(json))
  }, []);

  console.log(news);

  useEffect(() => {
    fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=${prygonApikey}`)
      .then((res) => res.json())
      .then((json) => setMarket(json))
  }, []);

  // const arrayData = Object.entries(data);
  // console.log(arrayData);
  if (data == null) {
    return (
     <Loading /> 
    )
  } 
  return (
    <SafeAreaView style={styles.container}>
      <Appbar />
      {/* {console.log(data)} */}
      <ScrollView>
        <TickerDetail
          branding={`${data.results.branding.icon_url}?apiKey=${prygonApikey}`}
          description={data.results.description}
          market_cap={data.results.marketCap}
          name={data.results.name}
          ticker={data.results.ticker}
        />
      </ScrollView>
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