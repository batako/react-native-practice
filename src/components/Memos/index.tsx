import { collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { type MemoType } from '../../../types/memo'
import { auth, db } from '../../config'
import Memo from './Memo'

const MemosIndex = (): JSX.Element => {
  const [memos, setMemos] = useState<MemoType[]>([])

  // メモ一覧を取得
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref)
    const unsbscribe = onSnapshot(q, snapshot => {
      const remoteMemos: MemoType[] = []
      snapshot.forEach(doc => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt,
        })
      })
      setMemos(remoteMemos)
    })

    // 画面が消えた場合は更新を停止
    return unsbscribe
  }, [])

  return (
    <FlatList
      data={memos}
      renderItem={({ item }) => <Memo memo={item} key={item.id} />}
    />
  )
}

export default MemosIndex
