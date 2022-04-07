import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CheckingScreen() {
  return (
   <View style={styles.container}>
      <Text
        style={styles.text}
        // onPress={() => navigation.navigate('Home')}
      >Checking Screen</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {
    color: '#ffffff'
  }
})