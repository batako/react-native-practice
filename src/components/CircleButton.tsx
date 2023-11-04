import { StyleSheet, Text, TouchableOpacity, View, type ViewStyle } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
  const {
    children,
    style,
    onPress,
  } = props

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // iOS用の影
    shadowColor: '#000000',
    shadowOpacity: 0.75,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // Android用の影
    elevation: 8,
  },
  label: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48,
  },
})

export default CircleButton
