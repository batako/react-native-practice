import { View, Text, StyleSheet } from 'react-native'

const AddButton = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>+</Text>
    </View>
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

export default AddButton
