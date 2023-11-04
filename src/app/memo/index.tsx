import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogoutButton from '../../components/LogoutButton'
import Memos from '../../components/Memos'

const showNew = (): void => {
  router.push('/memo/new')
}

const MemoIndex = (): JSX.Element => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />
    })
  }, [])

  return (
    <View style={styles.container}>
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
