import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* ヘッダ */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRightAction}>ログアウト</Text>
        </View>
      </View>

      {/* ボディ */}
      <View>
        {/* メモ１ */}
        <View style={styles.memoItem}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoItem}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoItem}>
          <View>
            <Text style={styles.memoItemTitle}>買い物リスト</Text>
            <Text style={styles.memoItemDate}>2023年11月03日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* アクション */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // 要素を画面全体に広げる
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // ヘッダー
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerRightAction: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'whrgba(255,255,255,0.7)',
  },
  // メモ
  memoItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  // アクション
  circleButton: {
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
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48,
  },
})

export default Index
