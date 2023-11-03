import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダ */}
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* ボディ */}
      <View>
        {/* メモ１ */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモ２ */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        {/* メモ３ */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* アクション */}
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Index
