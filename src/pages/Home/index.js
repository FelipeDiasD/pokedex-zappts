import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground

} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'

import api from '../../services/api'
import PokemonCardItem from '../../Components/PokemonCardItem'






export default function Home() {


const navigation = useNavigation()



  const [returnedPokemons, setRetunedPokemons] = useState ([])

  useEffect ( () => {
 
    async function loadData(){
       const pokemon =  await api.get("pokemon?limit=150&offset=0") //limitado a 150(região de kanto) mas pode ser aumentado
       
       setRetunedPokemons (pokemon?.data?.results)

       console.log(returnedPokemons)
    } 
    
    loadData()
  }, []
  
  )

  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar hidden = {true}/>

      <View style={styles.header}>
        
        <Text style={styles.greetingsTitle}>Welcome to the pokédex!</Text>
         
          
      </View>

      <View style = {styles.middleSection}>
        <Text style = {styles.greetingsAskToChoose}>Witch pokémon you are looking for?</Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Search', {pokemonData: returnedPokemons})}>
          <Feather name="search" size={25} color="#000" />
        </TouchableOpacity>

      </View>

      <FlatList
      alignItems = 'center'
      showsVerticalScrollIndicator = {false}
      numColumns = {2}
      data = {returnedPokemons}
      keyExtractor = {(item, index) => String(index)}
      renderItem = {({item, keyExtractor}) => <PokemonCardItem pokemon = {item} id = {keyExtractor}/>}/>

      



    </SafeAreaView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  header: {
    flexDirection: 'row',
    backgroundColor: '#8A8A8A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingLeft: 22,
    paddingBottom: 35,
    borderWidth:1,
    borderColor: "#000",
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,

    shadowColor: "#000",
    shadowOffset: {
   width: 0,
   height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  greetingsTitle: {
    color: '#FFF',
    fontSize: 20,
  },
  middleSection:{

    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingLeft: 21 ,
    paddingRight: 50

  },
  greetingsAskToChoose:{
    fontSize: 24,

  },

  pokemonCardList : {
    
  }
})
