import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,Alert } from 'react-native';
import AddProductScreen from '../../src/screens/AddProductScreen';

export default function InvestScreen() {
  return (
   <View style={styles.container}>
      <AddProductScreen />
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
})