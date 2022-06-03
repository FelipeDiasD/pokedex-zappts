import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

export default function Details() {
  return (
    <ScrollView>
      <Image />
      <View>
        <Text>Header/Decription</Text>
      </View>

      <View>
        <Text>Stats/fisical</Text>
      </View>

      <View>
        <Text>Statsbar</Text>
      </View>
    </ScrollView>
  )
}
