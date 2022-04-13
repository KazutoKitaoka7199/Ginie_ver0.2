import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, {useState} from 'react'
import Button from '../components/Button';

export default function LogInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View>
      <View>
        <Text>ログイン</Text>
      </View>
      <View>
        <TextInput
          label="Email Address"
          placeholder="Email Address"
          secureTextEntry
          left={<TextInput.Icon name="email-outline" />}
          style={styles.input}
        />
      </View>
      <View>
        <TextInput
          label="Password"
          placeholder="Paddword"
          secureTextEntry
          left={<TextInput.Icon name="lock-outline" />}
          style={styles.input}
        />
      </View>
      <Button
          label="はじめる"
          style={styles.style}
          onPress={() => navigation.navigate('main')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style: {
    width: 300,
    alignSelf: 'auto',
    borderRadius: 10,
  },
});
