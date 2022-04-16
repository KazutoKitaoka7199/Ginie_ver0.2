import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Button from './Button';

export default function ListItem({branding, description, market_cap, name, ticker}) {
  return (
    <View>
      <View>
        <View>
          {!!branding.icon_url
            && (
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: branding.icon_url }}
            />
            )}
        </View>
        <Text>{name}</Text>
        <Text>{ticker}</Text>
      </View>
      <Text>{market_cap}</Text>
      <View>
        <Text>プロフィール</Text>
        <Text numberOfLines={10}>
          {description}
        </Text>
      </View>
      <View>
        <Text>ニュース</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  subtext: {
    fontSize: 12,
    color: 'gray',
  },
});