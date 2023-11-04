import { StyleSheet, Text, View } from 'react-native'

interface Props {
  children: string
}

const Button = (props: Props): JSX.Element => {
  const { children } = props

  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
})

export default Button
