import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Appbar from '../components/AppBar';
import HeaderGuide from '../components/HeaderGuide';

export default function InvestmentSettingExpPie() {
  return (
    <View>
      <Appbar title="資産運用" />
      <HeaderGuide />
      <View>
        <Image
          source={require('../../img/ExpertPortfolioImg.png')}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.name}>グローバル分散投資</Text>
          <Text
            style={styles.explain}
          >
            ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
          </Text>
        </View>
      </View>
      <View style={styles.term}>
        <Text style={{ marginRight: 5 }}>1W</Text>
        <Text style={{ marginRight: 5 }}>1M</Text>
        <Text style={{ marginRight: 5 }}>1Q</Text>
        <Text style={{ marginRight: 5 }}>1Y</Text>
        <Text style={{ marginRight: 5 }}>3Y</Text>
        <Text style={{ marginRight: 5 }}>5Y</Text>
      </View>
      <View style={styles.liskCheck}>
        <Text style={{ marginRight: 35 }}>リスク</Text>
        <Text>リターン</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>超保守運用型</Text>
        <Text style={styles.liskRank}>☆☆☆☆☆</Text>
        <Text style={styles.return}>+1.7%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>保守運用型</Text>
        <Text style={styles.liskRank}>★☆☆☆☆</Text>
        <Text style={styles.return}>+2.3%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>やや保守運用型</Text>
        <Text style={styles.liskRank}>★☆☆☆☆</Text>
        <Text style={styles.return}>+2.7%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>バランス型</Text>
        <Text style={styles.liskRank}>★★☆☆☆</Text>
        <Text style={styles.return}>+3.5%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>やや積極運用型</Text>
        <Text style={styles.liskRank}>★★☆☆☆</Text>
        <Text style={styles.return}>+4.1%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>積極運用型</Text>
        <Text style={styles.liskRank}>★★★☆☆</Text>
        <Text style={styles.return}>+4.5%</Text>
      </View>
      <View style={styles.assets}>
        <Text style={styles.icon}>G</Text>
        <Text style={styles.type}>超積極運用型</Text>
        <Text style={styles.liskRank}>★★★☆☆</Text>
        <Text style={styles.return}>+5.8%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    position: 'absolute',
    marginHorizontal: 20,
  },
  name: {
    textAlign: 'center',
    marginTop: 80,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  explain: {
    marginTop: 15,
    marginHorizontal: 55,
    fontSize: 12,
    color: '#ffffff',
  },
  term: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 25,
  },
  liskCheck: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 30,
  },
  assets: {
    marginHorizontal: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#DADADA',
    paddingVertical: 3,
  },
  icon: {
    backgroundColor: '#86A4F3',
    color: '#ffffff',
    fontSize: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
    marginRight: 15,
  },
  type: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  liskRank: {
    position: 'absolute',
    alignSelf: 'center',
    left: 200,
    fontSize: 16,
    fontWeight: 'bold',
  },
  return: {
    alignSelf: 'center',
    marginLeft: 'auto',
    color: '#30E0A1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
