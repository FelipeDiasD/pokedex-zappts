import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'

export default function Search() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text>This is Search</Text>
      </View>

      <FlatList />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
