import { Link } from 'expo-router'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Icon from '../Icon'

interface Props {
  title: string
  date: string
}

const MemosMemo = (props: Props): JSX.Element => {
  const {
    title,
    date,
  } = props

  return (
    <Link href='/memo/show' asChild>
      <TouchableOpacity style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <TouchableOpacity>
          <Icon
            name='delete'
            size={40}
            color='#B0B0B0'
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
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

export default MemosMemo
