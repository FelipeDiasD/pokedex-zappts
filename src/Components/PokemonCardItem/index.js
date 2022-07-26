import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ReturnColor from '../../Utilites/Colors'
import PokemonTypeCard from '../PokemonTypeCard'

import api from '../../services/api'

//${pokemon?.pokemon?.url?.data?.sprites
export default function PokemonCardItem(pokemon, searchedPokemon) {
  const [pokemonDetails, setPokemonDetails] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])

  useEffect(() => {
    async function loadData() {
      const selectedPokemon = await api.get(`pokemon/${pokemon?.pokemon?.name}`)

      setPokemonDetails(selectedPokemon)

      const retunedTypes = await selectedPokemon?.data?.types?.map(
        tipos => tipos?.type?.name
      )

      setPokemonTypes(retunedTypes)
    }

    loadData()
  })

  const imageEndpoint =
    pokemonDetails?.data?.sprites?.other['official-artwork'].front_default
  const pokemonHeight = pokemonDetails?.data?.height / 10 // altura vem em decímetro
  const pokemonWeight = pokemonDetails?.data?.weight / 10 //peso vem em hectogramas
  const mainMove = pokemonDetails?.data?.abilities[1]?.ability
  const pokemonStats = pokemonDetails?.data?.stats

  const mainType = pokemonTypes[0]

  const navigation = useNavigation()
  function handleNavigation() {
    navigation.navigate('Details', {
      pokemonName: pokemon?.pokemon?.name,
      pokemonImage: imageEndpoint,
      pokemonTypes: pokemonTypes,
      mainColor: typeColor,
      mainMove: mainMove,
      pokemonStats: pokemonStats,
      pokemonHeight: pokemonHeight,
      pokemonWeight: pokemonWeight
    })
  }

  const typeColor = ReturnColor(mainType)

  return (
    <TouchableOpacity
      style={styleForContainer(typeColor).container}
      activeOpacity={0.8}
      onPress={handleNavigation}
    >
      <View style={styles.cardItems}>
        <Text style={styles.cardText}>{`${pokemon?.pokemon?.name}`}</Text>

        <PokemonTypeCard size="100%" text={`${pokemonTypes[0]}`} />

        {pokemonTypes.length > 1 && (
          <PokemonTypeCard size="100%" text={`${pokemonTypes[1]}`} />
        )}
      </View>

      <Image style={styles.icon} source={{ uri: `${imageEndpoint}` }} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: 70,
    width: 70,
    marginBottom: 7
  },

  cardItems: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  cardText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    textTransform: 'capitalize',
    marginBottom: 15
  }
})

const styleForContainer = typeColor =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: `${typeColor}`,
      width: 162,
      height: 110,
      justifyContent: 'space-between',
      alignItems: 'center',

      borderRadius: 24,

      margin: 10,
      paddingLeft: 16,
      paddingRight: 5,
      paddingTop: 0,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5
    }
  })
