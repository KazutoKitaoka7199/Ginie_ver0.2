import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Appbar from '../components/AppBar';
import StockData from '../src/StockData';
import { Ionicons } from '@expo/vector-icons';
import { db, auth } from '../components/Firebase';

export default function AddProductScreen({ route }) {
  const { ticker } = route.params;
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      const userid = auth.currentUser.uid;
      await addDoc(collection(db, `user/${userid}/portfolio`), {
        price,
        ratio,
        stockShare,
        ticker: ticker,
      });
      console.log(userid);
    } catch (e) {
      Alert.alert('データの保存に失敗しました');
    }
  };


  // function handlePress() {
  //   const userid = auth.currentUser.uid;
  //   if (user) {
  //     const docRef = query(collection(db, `user/${userid}/portfolio`));
  //     setDoc(doc(docRef, id), {
  //       price: 10,
  //       ratio: 20,
  //       stockShare: 0.2,
  //       ticker: "APPL",
  //     }, { merge: true })
  //       .then(() => {
  //         Alert.alert("追加しました");
  //       })
  //       .catch((error) => {
  //         const errorMsg = translateErrors(error.code);
  //         Alert.alert(errorMsg.title, errorMsg.description);
  //       });
  //   }
  // }

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigation.navigate("tickerDetail",{ ticker: item })}>
        <View style={styles.blandUnit}>
          <View style={styles.bland}>
            <Image
              source={item.imageUrl}
              style={{ width: 40, height: 40 }}
            />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.blandTicker}>{item.ticker}</Text>
              <Text style={styles.blandName}>{item.name}</Text>
            </View>
            <Text style={styles.marketCap}>${comma(item.totalPrice)}K</Text>
            <Pressable
              onPress={handlePress}
            >
              <Ionicons name="add-circle-outline" size={24} color="black" style={styles.addButtton}/>
            </Pressable>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Appbar title="資産運用" />
        </View>
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

          <FlatList
            data={StockData}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
        />
          <View styl={{padding: 16}}>
            <Pressable onPress={() => navigation.navigate("allocationChart")}>
              <Text>配分調整</Text>
            </Pressable>
          </View>
        </View>
    </SafeAreaView>
  );
}

// 3桁カンマ区切りとする.
function comma(num) {
  return String(num).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginLeft: 'auto',
  },
  addButtton: {
    paddingHorizontal: 10,
    fontSize: 24,
  },
});
