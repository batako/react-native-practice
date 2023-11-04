import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
  children: string
  onPress?: () => void
}

const Button = (props: Props): JSX.Element => {
  const {
    children,
    onPress,
  } = props

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{children}</Text>
    </TouchableOpacity>
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
