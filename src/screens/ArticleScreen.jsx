import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// functionではなく、アロー関数じゃないとうまく表示されない。routeを受け取っている
const ArticleScreen = ({ route }) => {
  const { article } = route.params;

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { dispatch(addClip({ clip: article })); }}>
        <Text>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { dispatch(deleteClip({ clip: article })); }}>
        <Text>Delete</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

export default ArticleScreen;