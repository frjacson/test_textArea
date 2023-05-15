import { View, Text, Textarea } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Textarea className='myTextarea'></Textarea>
    </View>
  )
}
