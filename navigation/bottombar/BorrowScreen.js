import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LendingScreen from '../../src/screens/LendingScreen';

export default function BorrowScreen() {
  return (
    <View style={styles.container}>
      <LendingScreen />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#ffffff'
  }
})