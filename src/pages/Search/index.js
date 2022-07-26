import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

import PokemonCardItem from '../../Components/PokemonCardItem'

export default function Search() {
  const [input, setInput] = useState('')

  const [searchedPokemons, setSearchedPokemons] = useState([])

  const route = useRoute()

  async function handleSearchPokemon() {
    if (input === '') {
      alert('Digite algum nome')

      return
    }

    const response = await route.params?.pokemonData

    function filterResponse(pokemonObj) {
      if (pokemonObj?.name.startsWith(`${input}`)) return true
    }

    const cleanResponse = response.filter(filterResponse)

    console.log(cleanResponse)

    setSearchedPokemons('')

    setSearchedPokemons(cleanResponse)

    setInput('')

    Keyboard.dismiss()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          style={styles.input}
          placeholder="Busque o pokemón que procura!"
        />

        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearchPokemon}
        >
          <Feather name="search" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={searchedPokemons}
        keyExtractor={index => String(index)}
        renderItem={({ item }) => <PokemonCardItem pokemon={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15
  },
  containerInput: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },

  input: {
    width: '85%',
    backgroundColor: '#C4C4C4',
    height: 45,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 12,
    fontSize: 16
  },

  searchButton: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    height: 45,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  }
})
