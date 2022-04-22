import { View, Text, Alert, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import {
  getDocs,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  query
} from "firebase/firestore";
import { db, auth } from "../components/Firebase";
import { useNavigation } from '@react-navigation/native';

export default function InvestentStatusScreen({ route }) {
  const navigation = useNavigation();
  const [jpy, setJpy] = useState();
  const { chartData } = route.params;
  const USD = 116;
  const converJpyToUsd = () => {
    // TODO: USDは動的にAPI経由で取得できるようになるのが理想。
    return jpy / USD;
  };

    const pay = async () => {
    const userid = auth.currentUser.uid;

    // 予算的な意味が伝わる変数がいいかも。
    const usd = converJpyToUsd(jpy);

    if (userid) {
      for (const data of chartData) {
        // 各株式の price, ratio を取得
        const {price, ratio} = data;

        // この株式を購入するのにつかったドルの金額
        const allocatableUsd = usd * ratio;
        const amount = allocatableUsd * ratio;
        console.log(allocatableUsd);
        // 最終的な stockshare の計算
        const stockShare = amount/price;
        // console.log(stockShare);
        // ポートフォリオを更新
        const docRef = doc(db, "user", userid, "portfolio", data.id);
        await updateDoc(docRef, {stockShare: stockShare}); // todo amountをfirestoreに保存する
      }
    }
  };

  return (
    <View>
      <Text>InvestentStatus</Text>
      <TextInput
          value={jpy}
          onChangeText={(text) => { setJpy(text); }}
          keyboardType="number-pad"
          style={styles.payment}
          placeholder="金額を入力"
        />
      <Text onPress={
        () => {
          pay()
          navigation.navigate("InvestmentStatusResult")
        }}>入金する</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  payment: {
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
})