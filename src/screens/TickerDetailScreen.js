import { View, Text, StyleSheet, SafeAreaView, FlatList, Image} from "react-native";
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
const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(`https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=${prygonApikey}`)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, []);

  const renderItem = ((item) => {
    return (
      <View style={styles.bland}>
        <Image
          source={item.imageUrl}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.blandTicker}>{item.ticker}</Text>
          <Text style={styles.blandName}>{item.name}</Text>
        </View>
        <Text style={styles.marketCap}>${comma(item.totalPrice)}K</Text>
      </View>
    );
  })

  return (
    <SafeAreaView style={styles.container}>
      <Appbar />
      {console.log("loading")}
      {isLoading ? <Loading /> :(
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TickerDetail
                branding={item.branding.icon_url}
                description={item.description}
                market_cap={item.marketCap}
                name={item.name}
                ticker={item.ticker}
              />
            )
          }}
          keyExtractor={(_item, index) => index.toString()}
        />
      )}
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