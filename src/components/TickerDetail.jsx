import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from './Button';

export default function TickerDetail({
  branding,
  description,
  market_cap,
  name,
  ticker,
  c,
  h,
  vw
}) {
  return (
    <View syle={styles.container}>
      <View  style={styles.item}>
        <View>
          {!!branding
            && (
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: branding }}
            />
            )}
        </View>
        <View style={styles.name}>
          <Text>{name}</Text>
          <Text>  {ticker}</Text>
        </View>
      </View>
      <Text style={styles.marketCap}>${market_cap}</Text>
      <View style={styles.info}>
        <Text style={styles.title}>主要な要素</Text>
        <View style={styles.detail}>
          <View style={styles.index}>
            <Text style={styles.indexItems}>本日終値</Text>
            <Text style={{position: "absolute", right: 150, fontWeight: "bold", paddingTop: 10}}>${c}</Text>
          </View>
          <View style={styles.index}>
            <Text style={styles.indexItems}>本日高値</Text>
            <Text style={{position: "absolute", right: 150, fontWeight: "bold", paddingTop: 10}}>${h}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>プロフィール</Text>
        <View style={styles.detail} numberOfLines={15}>
          <Text>{description}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>ニュース</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
  },
  name: {
    top: 15,
    flexDirection: 'row',
  },
  marketCap: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 5,
    bottom: 10,
    left: 10,
  },
  index: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  indexItems: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    marginVertical: 5,
  },
  detail: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(134, 164, 243, 0.20)',
    borderRadius: 10
  }
});
