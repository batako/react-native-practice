import { Link, router } from 'expo-router'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Button from '../../components/Button'

const login = (): void => {
  // TODO: ログイン
  router.push('/memo')
}

const AuthLogin = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>

        <TextInput style={styles.input} value='メールアドレス' />
        <TextInput style={styles.input} value='パスワード' />

        <Button label='送信' onPress={login} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>未登録ですか？</Text>
          <Link href='/auth/signup' asChild>
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
