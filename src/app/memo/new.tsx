import { router } from 'expo-router'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import { auth, db } from '../../config'

const save = (bodyText: string): void => {
  if (bodyText === '') return
  if (auth.currentUser === null) return

  addDoc(
    collection(db, `users/${auth.currentUser.uid}/memos`),
    {
      bodyText,
      updateAt: Timestamp.fromDate(new Date()),
    }
  )
    .then((docRef) => {
      console.log('success', docRef.id)
      router.push('/memo')
    })
    .catch((error) => {
      console.log(error)
    })
}

const MemoNew = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={bodyText}
          onChangeText={text => setBodyText(text)}
          autoFocus
          multiline
        />
      </View>

      <CircleButton onPress={() => save(bodyText)}>
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

export default MemoNew
