import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
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
