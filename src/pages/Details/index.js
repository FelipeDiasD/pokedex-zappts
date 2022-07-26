import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

import PokemonStatBar from '../../Components/PokemonStatBar'

import PokemonTypeCard from '../../Components/PokemonTypeCard'

import api from '../../services/api'

export default function Details() {
  const route = useRoute()

  const [pokemonDetails, setPokemonDetails] = useState([])

  useEffect(() => {
    async function loadData() {
      const selectedPokemon = await api.get(
        `pokemon-species/${route.params?.pokemonName}`
      )

      setPokemonDetails(selectedPokemon)
    }

    loadData()
  }, [])

  return (
    <SafeAreaView style={styles(route.params?.mainColor).container}>
      <ScrollView style={styles().scrollView}>
        <View style={styles(route.params?.mainColor).header}>
          <Text style={styles().headerNumberPokemon}>
            Nº #{pokemonDetails?.data?.id}
          </Text>

          <Text style={styles().headerTitlePokemon}>
            {route.params?.pokemonName}
          </Text>

          <PokemonTypeCard
            size="30%"
            text={`${route.params?.pokemonTypes[0]}`}
          />

          {route.params?.pokemonTypes.length > 1 && (
            <PokemonTypeCard
              size="30%"
              text={`${route.params?.pokemonTypes[1]}`}
            />
          )}
        </View>

        <Image
          style={styles().mainImage}
          source={{ uri: route.params.pokemonImage }}
        />

        <View style={styles().containerPokemonData}>
          <View style={styles().descriptionSection}>
            <Text style={styles(route.params?.mainColor).titleDescription}>
              Description
            </Text>

            <Text style={styles().textDescription}>
              {String(pokemonDetails?.data?.flavor_text_entries[6].flavor_text)}
            </Text>
          </View>

          <Text style={styles(route.params?.mainColor).mainStatsTitleText}>
            Caracteristics
          </Text>

          <View style={styles().mainStatsSection}>
            <View style={styles().cardMainStats}>
              <Text style={styles().textMainStats}>
                {route.params?.pokemonHeight}m
              </Text>
              <MaterialCommunityIcons
                name="ruler-square"
                size={24}
                color="black"
              />
              <Text>Height</Text>
            </View>

            <Text>
              |{'\n'}|{'\n'}|{'\n'}|{'\n'}|{'\n'}|
            </Text>

            <View style={styles().cardMainStats}>
              <Text style={styles().textMainStats}>
                {route.params?.pokemonWeight} kg
              </Text>
              <MaterialCommunityIcons name="scale" size={24} color="black" />
              <Text>Weight</Text>
            </View>

            <Text>
              |{'\n'}|{'\n'}|{'\n'}|{'\n'}|{'\n'}|
            </Text>

            <View style={styles().cardMainStats}>
              <Text style={styles().textMainStats}>
                {(route.params?.mainMove?.name).replace(/[^a-zA-Z0-9 ]/g, ' ')}
              </Text>
              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={24}
                color="black"
              />
              <Text>Main ability</Text>
            </View>
          </View>

          <View style={styles().statsBarSection}>
            <Text style={styles(route.params?.mainColor).statsTitleText}>
              Stats
            </Text>

            <PokemonStatBar
              progressValue={route.params?.pokemonStats[0]?.base_stat}
              nameStat={route.params?.pokemonStats[0]?.stat?.name}
            />

            <PokemonStatBar
              progressValue={route.params?.pokemonStats[1]?.base_stat}
              nameStat={route.params?.pokemonStats[1]?.stat?.name}
            />

            <PokemonStatBar
              progressValue={route.params?.pokemonStats[2]?.base_stat}
              nameStat={route.params?.pokemonStats[2]?.stat?.name}
            />

            <PokemonStatBar
              progressValue={route.params?.pokemonStats[3]?.base_stat}
              nameStat={route.params?.pokemonStats[4]?.stat?.name}
            />

            <PokemonStatBar
              progressValue={route.params?.pokemonStats[4]?.base_stat}
              nameStat={route.params?.pokemonStats[4]?.stat?.name}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = mainColor =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `${mainColor}`
      //alignItems: 'center',
    },

    scrollView: {
      flexGrow: 1,
      flexDirection: 'column'
    },

    header: {
      height: 320,
      //backgroundColor: `${mainColor}`,
      justifyContent: 'flex-start',
      padding: 12
    },

    headerBasicData: {
      width: '30%'
    },

    headerTitlePokemon: {
      fontSize: 20,
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: '#FFF',
      alignSelf: 'flex-start',
      marginBottom: 15
    },

    headerNumberPokemon: {
      fontSize: 20,
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: '#000',
      opacity: 0.5,
      borderColor: '#000',
      textDecorationStyle: 'solid',
      alignSelf: 'flex-end'
    },

    mainImage: {
      top: 110,

      left: 70,
      position: 'absolute',
      //alignSelf: 'center',
      width: 250,
      height: 250,
      zIndex: 100
    },

    containerPokemonData: {
      width: '100%',
      alignItems: 'center',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      backgroundColor: '#FFF',
      padding: 10
    },

    descriptionSection: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingBottom: 50,

      width: '100%'
    },

    titleDescription: {
      fontSize: 20,
      alignSelf: 'flex-start',
      marginTop: 20,
      marginBottom: 40,
      fontWeight: 'bold',
      color: `${mainColor}`,

      textShadowColor: '#C7C7C7',
      textShadowOffset: {
        width: 0,
        height: 2
      },
      textShadowRadius: 2
    },

    textDescription: {
      textAlign: 'left',
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'capitalize',
      marginBottom: 15
    },
    mainStatsTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: 15,
      color: `${mainColor}`,
      marginBottom: 40,

      textShadowColor: '#C7C7C7',
      textShadowOffset: {
        width: 0,
        height: 2
      },

      textShadowRadius: 2
    },
    mainStatsSection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      paddingHorizontal: 5,
      backgroundColor: '#FFF',
      paddingBottom: 60
    },

    cardMainStats: {
      alignItems: 'center',
      //alignContent: "center",
      justifyContent: 'space-between',
      paddingBottom: 5,
      borderColor: '#000',
      padding: 5
    },

    textMainStats: {
      fontSize: 24,
      textTransform: 'capitalize',
      fontWeight: '800',
      marginTop: 15
    },

    statsTitleText: {
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginLeft: 15,
      marginBottom: 15,
      color: `${mainColor}`,

      textShadowColor: '#C7C7C7',
      textShadowOffset: {
        width: 0,
        height: 2
      },

      textShadowRadius: 2
    },

    statsBarSection: {
      width: '100%',
      paddingVertical: 10,
      backgroundColor: '#FFF'
    }
  })
