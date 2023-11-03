import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
  showMark?: boolean
}

const Hello = (props: Props): JSX.Element => {
  const {
    children,
    showMark = false,
  } = props

  return (
    <View>
      <Text style={styles.text}>
        Hello {children}{showMark && '!'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
})

export default Hello
