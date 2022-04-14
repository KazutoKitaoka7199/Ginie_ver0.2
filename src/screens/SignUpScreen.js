import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, {useState} from 'react'
import Button from '../components/Button';

export default function LogInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>ログイン</Text>
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
            right={<TextInput.Icon name="eye" />}
            style={styles.input}
          />
        </View>
        <Button
          label="はじめる"
          style={styles.style}
          onPress={() => navigation.navigate('main')}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>新規ユーザーの方は</Text>
          <Text style={styles.footerLink}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'logIn' }],
                  });
                }}
          >
            こちらから登録
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 24,
  },
  inner: {
    paddingHorizontal: 21,
  },
  input: {
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
  },
  style: {
    width: 330,
    alignSelf: 'auto',
    borderRadius: 10,
    left: 15,
    marginTop: 40,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#A2A2A7',
  },
  footerLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0066FF',
  },
});
