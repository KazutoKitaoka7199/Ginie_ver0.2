import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, {useState, useEffect} from 'react'
import Button from '../components/Button';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/Firebase';
import Loading from '../components/Loading';

export default function LogInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'main' }],
        });
      } else {
        setIsLoading(false);
      }
    });
    return () => unSub();
  }, []);

  const handlePress = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, pass);
      navigation.reset({
        index: 0,
        routes: [{ name: 'main' }],
      });
      setIsLoading(false);
    } catch (error) {
      const errorMsg = translateErrors(error.code);
      Alert.alert(errorMsg.title, errorMsg.description);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading}/>
      <View style={styles.inner}>
        <View>
          <Text style={styles.title}>ログイン</Text>
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
          <Text style={styles.footerText}>新規ユーザーの方は</Text>
          <Text style={styles.footerLink}
                onPress={() => {
                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'signUp' }],
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
