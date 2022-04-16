import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import LogOutButton from './LogOutButton';

export default function Appbar(props) {
  const { title } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appInner}>
        <FontAwesome5
          name="filter"
          size={20}
          color="black"
          style={styles.appbarLeft}
        />
        <Text style={styles.appbarItem}>{title}</Text>
        <View style={styles.appbarRight}>
          <FontAwesome5
            name="bell"
            size={20}
            color="black"
            style={styles.bell}
          />
          <LogOutButton style={styles.user}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  bell: {
    position: 'absolute',
    left: 320,
  },
  user: {
    position: 'absolute',
    left: 350,
  },
});
