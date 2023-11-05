import { router, useLocalSearchParams } from 'expo-router'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'

import { type MemoType } from '../../../types/memo'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { auth, db } from '../../config'

const save = (id: string, bodyText: string): void => {
  if (auth.currentUser === null) return

  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  const saveParams: Omit<MemoType, 'id'> = {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
  }

  setDoc(ref, saveParams)
    .then(() => {
      router.back()
    })
    .catch(() => {
      Alert.alert('更新に失敗しました。')
    })
}

const MemoEdit = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState<MemoType['bodyText']>('')

  useEffect(() => {
    if (auth.currentUser === null) return

    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)

    getDoc(ref)
      .then(docRef => {
        const RemoteBodyText = docRef?.data()?.bodyText
        // const { bodyText } = docRef.data() as MemoType

        setBodyText(RemoteBodyText)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={bodyText}
          multiline
          onChangeText={text => setBodyText(text)}
        />
      </View>

      <CircleButton onPress={() => save(id, bodyText)}>
        <Icon name='check' size={40} />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default MemoEdit
