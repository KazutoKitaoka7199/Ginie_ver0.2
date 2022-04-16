import React from 'react';
import {
  StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { FontAwesome5 } from '@expo/vector-icons';
import { shape } from 'prop-types';

export default function LogOutButton(props) {
  const { style } = props;
  // react Hooksはコンポーネントの直下に置かないと機能しない
  const navigation = useNavigation();
  function handlePress() {
    signOut(auth)
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity style={style} onPress={handlePress}>
      <FontAwesome5 name="user" size={20} color="black"/>
    </TouchableOpacity>
  );
}

LogOutButton.propTypes = {
  style: shape(),
};

LogOutButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.75)',
  },
});
