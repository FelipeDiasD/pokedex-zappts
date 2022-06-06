import React, {useEffect, useState} from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,

} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import PokemonCardItem from '../../Components/PokemonCardItem'




export default function Home() {


const navigation = useNavigation()



  const [returnedPokemons, setRetunedPokemons] = useState ([])

  useEffect ( () => {
 
    async function loadData(){
       const pokemon =  await api.get("pokemon")
       
       setRetunedPokemons (pokemon.data.results)
    } 
    
    loadData()
  }, []
  
  )


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden = {true}/>

      <View style={styles.header}>
         <Text style={styles.greetingsTitle}>Olá treinador!</Text>
         <Image/>   
      </View>

      <View style = {styles.middleSection}>
        <Text style = {styles.greetingsAskToChoose}>Qual pokémon você irá escolher?</Text>
      </View>

      <FlatList
      alignItems = 'center'
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
    backgroundColor: '#494949',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0,
    paddingTop: 60,
    paddingLeft: 22,
    paddingBottom: 35,
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24
  },

  greetingsTitle: {
    color: '#FFF',
    fontSize: 20,
  },
  middleSection:{
    
    marginVertical: 10,
    paddingLeft: 21 ,
    paddingRight: 50

  },
  greetingsAskToChoose:{
    fontSize: 24,

  },

  trainerPhoto: {
    height: 47,
    width: 47
  },

  pokemonCardList : {
    
  }
})
