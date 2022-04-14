import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import React from "react";
import Button from "../components/Button";
import {useNavigation} from "@react-navigation/native";

export default function OnbordingItem({item}) {
  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width: 350, resizeMode: "contain", bottom: 60}]}
      />
      <View style={styles.content}>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {item.key == 4 && (
          <Button
            label="次へ"
            style={{
              position: "absolute",
              width: 300,
              alignSelf: "auto",
              borderRadius: 10,
              left: 15,
              bottom: 10,
            }}
            onPress={() => navigation.navigate("main")}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginHorizontal: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  subTitle: {
    fontWeight: "bold",
    textAlign: "center",
    bottom: 140,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    bottom: 130,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
    bottom: 100,
    color: "#7E848D",
  },
});
