import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BackButton() {
  const size = 128;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  return (
    <View style={styles.container}>
      <Text>BackButton</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})