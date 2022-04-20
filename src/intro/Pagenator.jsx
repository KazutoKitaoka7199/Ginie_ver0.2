import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native'
import React from 'react'

export default function Pagenator({ data, scrollx }) {
  const {width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollx.interpolate({
          inputRange,
          outputRange: [10, 22, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        })
        return <Animated.View style={[styles.dot, {width: dotWidth, opacity}]} key={i.toString()} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    height: 20,
    bottom: 300,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#41455E',
    marginHorizontal: 8,
  }
})