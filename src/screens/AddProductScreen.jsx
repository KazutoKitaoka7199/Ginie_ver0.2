import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import HeaderGuide from '../components/HeaderGuide';
import Appbar from '../components/AppBar';

export default function AddProductScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Appbar title="資産運用" />
        </View>
        <HeaderGuide />
        <View style={styles.search}>
          <View style={styles.portChoices}>
            <Text>個別株式</Text>
            <Text>ETF</Text>
            <Text>専門家ポート</Text>
            <Text>登録ポート</Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBar}
              placeholder="検索"
            />
          </View>
          <View style={styles.searchTabs}>
            <Text style={{ fontSize: 12, color: '#8B8B94' }}>おすすめ順</Text>
            <Text style={{ fontSize: 12, color: '#8B8B94' }}>ETF</Text>
            <Text style={{ fontSize: 12, color: '#8B8B94' }}>時価総額順</Text>
            <Text style={{ fontSize: 12, color: '#8B8B94' }}>アルファベット順</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.blandTitle}>銘柄名</Text>
            <Text style={styles.blandMrkCap}>時価総額</Text>
          </View>
        </View>

        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={require('../../img/Tesla.png')}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>TSLA</Text>
              <Text style={styles.blandName}>Tesla Motors</Text>
            </View>
            <Text style={styles.marketCap}>$860B</Text>
          </View>
          <Text style={styles.addButtton}>⊕</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  portChoices: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  search: {
    backgroundColor: '#F9F9F9',
    paddingVertical: 5,
    marginVertical: 2,
  },
  searchBar: {
    height: 30,
    margin: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7388FF',
    fontSize: 14,
    backgroundColor: '#ffffff',
  },
  searchTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blandUnit: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  title: {
    flexDirection: 'row',
    marginTop: 7,
  },
  blandTitle: {
    marginLeft: 85,
  },
  blandMrkCap: {
    marginLeft: 160,
  },
  bland: {
    flexDirection: 'row',
  },
  blandTicker: {
    color: '#8B8B94',
    fontSize: 12,
  },
  blandName: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  marketCap: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 110,
  },
  addButtton: {
    marginTop: 10,
    marginLeft: 10,
    paddingHorizontal: 15,
  },
});
