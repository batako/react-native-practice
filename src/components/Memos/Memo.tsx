import { Link } from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { type MemoType } from '../../../types/memo'
import { auth, db } from '../../config'
import Icon from '../Icon'

interface Props {
  memo: MemoType
}

const destroy = (id: string): void => {
  if (auth.currentUser === null) return

  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)

  Alert.alert('メモを削除します', 'よろしいですか？', [
    {
      text: 'キャンセル',
    },
    {
      text: '削除する',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref)
          .catch(() => Alert.alert('削除に失敗しました。'))
      },
    },
  ])
}

const MemosMemo = (props: Props): JSX.Element => {
  const { memo } = props
  const dateString = memo.updatedAt?.toDate()?.toLocaleString('ja-JP')

  return (
    <Link
      href={{ pathname: '/memo/show', params: { id: memo.id } }}
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <View>
          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {memo.bodyText}
          </Text>
          <Text style={styles.date}>{dateString}</Text>
        </View>

        <TouchableOpacity onPress={() => destroy(memo.id)}>
          <Icon
            name='delete'
            size={40}
            color='#B0B0B0'
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 16,
    lineHeight: 32,
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
})

export default MemosMemo
