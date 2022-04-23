import { View, Text, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { FontAwesome5} from '@expo/vector-icons';
import {
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../components/Firebase";
import { useNavigation } from '@react-navigation/native';
import LogOutButton from '../components/LogOutButton';
import { sendEmailVerification } from 'firebase/auth';

export default function InvestentStatusScreen({ route }) {
  const navigation = useNavigation();
  const [jpy, setJpy] = useState();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  const { chartData } = route.params;
  const USD = 128;
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
        const allocatableUsd = usd * ratio * 0.01;
        const amount = allocatableUsd * ratio * 0.01;
        console.log(amount);
        // 最終的な stockshare の計算
        const stockShare = amount/price;
        // ポートフォリオを更新
        const docRef = doc(db, "user", userid, "portfolio", data.id);
        await updateDoc(docRef, {stockShare: stockShare}); // todo amountをfirestoreに保存する
      }
    }
  };

  return (
    <View style={styles.appbar}>
      <View style={styles.mybankAccount}>
        <View>
          <Text style={{fontSize: 16, fontWeight: "bold"}}>入金元口座</Text>
          <Text>三菱UFJ銀行 015</Text>
          <Text>普通111*****</Text>
        </View>
        <FontAwesome5
          name="chevron-right"
          size={20}
          color="black"
          style={{ position: 'absolute', right: 30, top: 20 }}
        />
      </View>
      <View style={styles.paymentSetting}>
        <View>
          <Text style={{fontSize: 16, fontWeight: "bold"}}>入金先</Text>
          <Text>マイポートフォリオ</Text>
        </View>
        <FontAwesome5
          name="chevron-right"
          size={20}
          color="black"
          style={{ position: 'absolute', right: 30, top: 20 }}
        />
      </View>
      <View style={{marginTop: 50, marginBottom: 50}}>
        <TextInput
          value={jpy}
          label="入金"
          placeholder="金額を入力"
          left={<TextInput.Icon name="currency-jpy" />}
          onChangeText={(text) => { setJpy(text); }}
          keyboardType="number-pad"
          style={styles.payment}
        />
      </View>
      <Text style={styles.button} onPress={
        () => {
          pay()
          navigation.navigate("InvestmentStatusResult", {jpy: jpy || "", USD: USD})
        }}>入金する</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  payment: {
    height: 50,
    margin: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7388FF',
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: '#ffffff',
    textAlignVertical: 'center'
  },
  button: {
    backgroundColor: '#0066FF',
    borderRadius: 10,
    textAlign: 'center',
    width: 170,
    color: '#ffffff',
    paddingVertical: 5,
    left: 110,
  },
  appbar: {
    width: '100%',
    height: 80,
    top: 30,
  },
  appInner: {
    flexDirection: 'row',
  },
  appbarItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    lineHeight: 32,
    position: 'absolute',
    left: 150,
  },
  appbarLeft: {
    position: 'absolute',
    left: 15,
  },
  appbarRight: {
    flexDirection: 'row',
  },
  user: {
    position: 'absolute',
    left: 350,
  },
  mybankAccount: {
    width: 350,
    height: 50,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 50,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  paymentSetting: {
    width: 350,
    height: 50,
    paddingHorizontal: 25,
    marginHorizontal: 25,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 50,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
})