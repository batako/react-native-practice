import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Header from '../../components/Header'
import Icon from '../../components/Icon'

const Detail = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={'買い物リスト\nリスト'}
          multiline
        />
      </View>

      <CircleButton>
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

export default Detail