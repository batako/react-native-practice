import { router } from 'expo-router'
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const save = (): void => {
  router.push('/memo')
}

const MemoEdit = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={'買い物リスト\nリスト'}
          multiline
        />
      </View>

      <CircleButton onPress={save}>
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
