import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import Appbar from '../components/AppBar';

export default function LendingScreen() {
  return (
    <View>
      <View>
        <Appbar title="借入" />
      </View>
      <View style={styles.lending}>
        <Text style={styles.possibleAmount}>借入可能残高</Text>
        <Text style={styles.possibleAmountNum}>1,321,000円</Text>
        <View style={styles.nowLending}>
          <Text>現在借入残高：</Text>
          <Text>432,000円</Text>
        </View>
        <View style={styles.credit}>
          <Text style={styles.creditText}>与信上限</Text>
          <Text style={styles.creditNum}>1,764,000円</Text>
        </View>
        <Image
          source={require('../../img/Frame48.png')} />
        <View style={styles.creditInfo}>
          <Text>現在与信上限のうち24.6%を利用しています</Text>
        </View>
        <View>
          <Text style={styles.creditIR}>借入金利(年間)</Text>
          <Text style={styles.creditIRNum}>1.5%</Text>
        </View>
        <View>
          <Text>請求</Text>
          <View style={styles.claimInfo}>
            <Text>次回請求日</Text>
            <Text>金利支払額</Text>
            <Text>542円</Text>
          </View>
          <View style={styles.claimInfo}>
            <Text>2022/4/3</Text>
            <Text>元本返済額</Text>
            <Text>0円</Text>
          </View>
          <View style={styles.claimInfo}>
            <Text>過去請求額を確認</Text>
            <Text>借入</Text>
            <Text>542円</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  lending: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  possibleAmount: {
    fontWeight: 'bold',
  },
  possibleAmountNum: {
    fontWeight: 'bold',
    fontSize: 34,
    marginBottom: 20,
  },
  nowLending: {
    flexDirection: 'row',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  credit: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  creditText: {
    fontWeight: 'bold',
    right: 100,
    fontSize: 16,
  },
  creditNum: {
    fontWeight: 'bold',
    left: 100,
    fontSize: 16,
  },
  creditInfo: {
    right: 20,
    marginBottom: 10,
  },
  creditIR: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  creditIRNum: {
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
  }
})