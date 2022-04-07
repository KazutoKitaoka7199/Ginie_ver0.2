import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'
import React, { useState, useRef } from 'react'

import OnbordingItem from './OnbordingItem';
import Slides from './Slides';

export default function Onbording() {
  const scrollx = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <OnbordingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
          useNativeDriver: false,
        })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
