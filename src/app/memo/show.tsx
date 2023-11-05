import { router, useLocalSearchParams } from 'expo-router'
import { doc, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { type MemoType } from '../../../types/memo'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'

const edit = (id: string): void => {
  router.push({ pathname: '/memo/edit', params: { id } })
}

const MemoShow = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [memo, setMemo] = useState<MemoType | null>(null)

  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    const unsubscribe = onSnapshot(ref, memoDoc => {
      const { bodyText, updatedAt } = memoDoc.data() as MemoType
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt,
      })
    })
    return unsubscribe
  })

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text
          style={styles.memoTitle}
          numberOfLines={1}
        >
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoDate}>
          {memo?.updatedAt.toDate()?.toLocaleString('ja-JP')}
        </Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {memo?.bodyText}
        </Text>
      </ScrollView>

      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        onPress={() => edit(id)}
      >
        <Icon
          name='pencil'
          size={40}
        />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
})

export default MemoShow
