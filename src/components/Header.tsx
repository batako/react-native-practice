import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Memo App</Text>
        <Text style={styles.rightAction}>ログアウト</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  inner: {
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  rightAction: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'whrgba(255,255,255,0.7)',
  },
})

export default Header
