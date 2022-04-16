import { View, Text, StyleSheet, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, {useState} from 'react'
import Button from '../components/Button';
import { auth } from '../components/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { translateErrors } from '../utilities';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handlePress = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigation.reset({
        index: 0,
        routes: [{ name: 'main' }],
      });
    } catch (error) {
      const errormsg = translateErrors(error.code);
      Alert.alert(errormsg.title, errormsg.description);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>アカウント作成</Text>
        </View>
        <View>
          <TextInput
            label="Email Address"
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => { setEmail(text); }}
            left={<TextInput.Icon name="email-outline" />}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <View>
          <TextInput
            label="Password"
            placeholder="Paddword"
            value={pass}
            onChangeText={(text) => { setPass(text); }}
            secureTextEntry
            left={<TextInput.Icon name="lock-outline" />}
            right={<TextInput.Icon name="eye" />}
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />
        </View>
        <Button
          label="はじめる"
          style={styles.style}
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>既にアカウントをお持ちの方は</Text>
          <Text style={styles.footerLink}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'logIn' }],
                  });
                }}
          >
            こちらからログイン
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
