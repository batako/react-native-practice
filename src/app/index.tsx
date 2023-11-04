import { StyleSheet, View } from 'react-native'

import CircleButton from '../components/CircleButton'
import Header from '../components/Header'
import Memos from '../components/Memos'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <Memos />

      <CircleButton>+</CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // 要素を画面全体に広げる
    flex: 1,
    backgroundColor: '#ffffff',
  },
})

export default Index
