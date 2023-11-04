import { useFonts } from 'expo-font'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'

import fontData from '../../assets/fonts/icomoon.ttf'
import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  'IcoMoon',
  'icomoon.ttf'
)

interface Props {
  name: 'check' | 'delete' | 'pencil' | 'plus'
  color?: string
  size: number
}

const Icon = (props: Props): JSX.Element | null => {
  const {
    name,
    color = '#ffffff',
    size,
  } = props
  const [fontLoaded] = useFonts({
    IcoMoon: fontData,
  })

  return fontLoaded
    ? <CustomIcon
        name={name}
        color={color}
        size={size}
      />
    : null
}

export default Icon
