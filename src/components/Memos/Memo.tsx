import { View, Text, StyleSheet } from 'react-native'

const Memo = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>買い物リスト</Text>
        <Text style={styles.date}>2023年11月03日 10:00</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 16,
    lineHeight: 32,
  },
  date: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
})

export default Memo
