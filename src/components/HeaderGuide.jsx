import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function HeaderGuide() {
  return (
    <View>
      <View style={styles.search}>
        <View style={styles.portChoices}>
          <Text>個別株式</Text>
          <Text>ETF</Text>
          <Text>専門家ポート</Text>
          <Text>登録ポート</Text>
        </View>
        <View style={styles.searchTabs}>
          <Text style={{ fontSize: 12, color: '#8B8B94' }}>おすすめ順</Text>
          <Text style={{ fontSize: 12, color: '#8B8B94' }}>人気順</Text>
          <Text style={{ fontSize: 12, color: '#8B8B94' }}>時価総額順</Text>
          <Text style={{ fontSize: 12, color: '#8B8B94' }}>アルファベット順</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.blandTitle}>銘柄名</Text>
          <Text style={styles.blandMrkCap}>時価総額</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  portChoices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  search: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 5,
    marginVertical: 2,
  },
  searchTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    flexDirection: 'row',
    marginTop: 7,
  },
  blandTitle: {
    marginLeft: 85,
    color: '#000000',
  },
  blandMrkCap: {
    marginLeft: 150,
    color: '#000000',
  },
});
