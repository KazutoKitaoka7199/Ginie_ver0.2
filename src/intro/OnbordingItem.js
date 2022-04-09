import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

export default function OnbordingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, {width:350, resizeMode: 'contain', bottom: 60}]}
      />
      <View style={styles.content}>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 30,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 140,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    bottom: 130,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 10,
    bottom: 100,
    color: '#7E848D',
  },
});
