import { Link } from 'expo-router'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Button from '../../components/Button'
import Header from '../../components/Header'

const AuthSignup = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inner}>
        <Text style={styles.title}>新規登録</Text>

        <TextInput style={styles.input} value='メールアドレス' />
        <TextInput style={styles.input} value='パスワード' />

        <Button label='送信' />

        <View style={styles.footer}>
          <Text style={styles.footerText}>登録済みですか？</Text>
          <Link href='/auth/login' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>ログイン</Text>
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

export default AuthSignup
