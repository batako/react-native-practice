import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Memos from '../components/Memos'
import AddButton from '../components/AddButton'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <Memos />

      <AddButton />
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
