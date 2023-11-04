import { Link, router } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Button from '../../components/Button'
import { auth } from '../../config'

const login = (email: string, password: string): void => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log(userCredential.user.uid)
      router.replace('/memo')
    })
    .catch(error => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(message)
    })
}

const AuthLogin = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text) }
          autoCapitalize='none'
          placeholder='メールアドレス'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text) }
          autoCapitalize='none'
          secureTextEntry
          placeholder='パスワード'
          textContentType='password'
        />

        <Button
          label='ログイン'
          onPress={() => login(email, password)}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>未登録ですか？</Text>
          <Link
            href='/auth/signup'
            asChild
            replace
          >
            <TouchableOpacity>
              <Text style={styles.footerLink}>こちらでサインアップしてください！</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
})

export default AuthLogin
