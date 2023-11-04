import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Memos from '../../components/Memos'

const showNew = (): void => {
  router.push('/memo/new')
}

const MemoIndex = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />

      <Memos />

      <CircleButton onPress={showNew}>
        <Icon
          name='plus'
          size={40}
        />
      </CircleButton>
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

export default MemoIndex
