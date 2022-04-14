import {View, Text, StyleSheet, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import Appbar from "../components/AppBar";

export default function TickerDetailScreen({}) {
const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Appbar/>
        </View>
      <FlatList>
      </FlatList>
      <Text>これはTickerDetailScreenです</Text>
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>loading</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});