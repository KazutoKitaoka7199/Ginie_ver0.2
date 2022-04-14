import {View, Text, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";

export default function TickerDetailScreen({ticker}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <View style={styles.container}>
      <Text>これはTickerDetailScreenです</Text>
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>loading</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
