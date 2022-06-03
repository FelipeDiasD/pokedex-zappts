import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image
} from 'react-native'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingsTitle}>This is home!</Text>
        <Image
          style={styles.trainerPhoto}
          uri="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#494949',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 35,
    borderRadius: 24
  },

  greetingsTitle: {
    color: '#FFF'
  },

  trainerPhoto: {
    height: 47,
    width: 47
  }
})
