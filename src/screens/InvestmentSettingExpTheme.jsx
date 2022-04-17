import React from 'react';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Appbar from '../components/AppBar';
import HeaderGuide from '../components/HeaderGuide';

export default function InvestmentSettingExpTheme() {
  return (
    <View style={styles.container}>
      <Appbar title="資産運用" />
      <HeaderGuide />
      <Text style={styles.portfolioTitle}>専門家ポートフォリオ：投資戦略一覧</Text>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.portfolio}>
        <Image
          source={require('../../img/portfolioImg.png')}
          style={styles.portfolioImg}
        />
        <View style={styles.portfolioContent}>
          <View style={styles.portfolioMenu}>
            <Text style={styles.portfolioMenuTitle}>グローバル分散投資</Text>
            <Text style={styles.biginer}>ビギナー向け</Text>
          </View>
          <View style={styles.portfolioText}>
            <Text
              style={
                {
                  fontSize: 13,
                  lineHeight: 16,
                  color: '#8B8B94',
                }
              }
            >
              ノーベル賞理論に基づいた分散型ポートフォリオをベースに、自分のリスク許容度に合わせたポートフォリオを作成します
            </Text>
          </View>
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
  portfolioTitle: {
    textAlign: 'center',
    backgroundColor: '#F2F5FE',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 5,
  },
  portfolio: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#C4C4C4',
    flexDirection: 'row',
    paddingVertical: 3,
  },
  portfolioMenu: {
    flexDirection: 'row',
  },
  portfolioImg: {
    marginRight: 5,
  },
  portfolioContent: {
    flexDirection: 'column',
    marginRight: 20,
  },
  portfolioText: {
    marginVertical: 10,
    width: 270,
  },
  portfolioMenuTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 21,
  },
  biginer: {
    color: '#ffffff',
    backgroundColor: '#30E0A1',
    fontWeight: 'bold',
    paddingHorizontal: 4,
    borderRadius: 3,
    marginLeft: 'auto',
  },
});
