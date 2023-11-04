import { View } from 'react-native'

import Memo from './Memo'

const Memos = (): JSX.Element => {
  return (
    <View>
      <Memo
        title={'買い物リスト３'}
        date={'2023年11月03日 10:00'}
      />
      <Memo
        title={'買い物リスト２'}
        date={'2023年11月02日 10:00'}
      />
      <Memo
        title={'買い物リスト１'}
        date={'2023年11月01日 10:00'}
      />
    </View>
  )
}

export default Memos
