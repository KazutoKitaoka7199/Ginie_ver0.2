import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Onbording from './Onbording';
import Button from '../components/Button';

export default function Landing({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.landing}>
        <Image style={styles.img} source={require('../../img/LogoLogo.png')} />
        <Text style={styles.title}>
          長期資産運用・管理を
          {'\n'}
          もっと便利で自由に
        </Text>
      </View>
      <View style={styles.button}>
        <Button
          label="はじめる"
          style={styles.style}
          onPress={() => navigation.navigate('onbording')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  landing: {
    alignItems: 'center',
    top: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 166,
    height: 251,
  },
  button: {
    top: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    width: 300,
    alignSelf: 'auto',
    borderRadius: 10,
  }
});