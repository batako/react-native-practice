import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CircleButton from '../../components/CircleButton'
import Header from '../../components/Header'
import Icon from '../../components/Icon'

const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年10月1日 10:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          書体やレイアウトなどを確認に用います。
          本文用なので使い方を間違えると不自然に見えることもありますので注意。
        </Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }}>
        <Icon
          name='pencil'
          size={40}
        />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
})

export default Detail
