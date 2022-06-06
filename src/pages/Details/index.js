import React, {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'


import {useNavigation, useRoute} from '@react-navigation/native'

import { MaterialCommunityIcons } from '@expo/vector-icons';

import PokemonStatBar from '../../Components/PokemonStatBar'

import api from '../../services/api'

export default function Details() {

  const route = useRoute()
  const navigation = useNavigation()



  const [pokemonDetails, setPokemonDetails] = useState ([])


  useEffect ( () => {
 
    

    async function loadData(){

       
       const selectedPokemon =  await api.get(`pokemon-species/${route.params?.pokemonName}`)
       
       
       setPokemonDetails (selectedPokemon)

       
       
    } 
   
    
    
    loadData()
  }, []
  )


  return (
    <SafeAreaView style = {styles(route.params?.mainColor).container}>

      <ScrollView style = {styles().scrollView}>
       
        

          <View style = {styles(route.params?.mainColor).header}>
  
            <Text style = {styles().titlePokemon}>
            {route.params?.pokemonName}
            </Text>
  
            <Text style = {styles().numberPokemon}>
            Nº #{pokemonDetails?.data?.id}
            </Text>
  
          </View>
  
          <Image
            style = {styles().mainImage}
            source = {{uri: route.params.pokemonImage}}
          />

        <View style = {styles().containerPokemonData}>
  
          <View style = {styles().descriptionSection}>
  
             <Text style = {styles(route.params?.mainColor).titleDescription}>
                Description
             </Text>
  
             <Text style = {styles().textDescription}>
                {String(pokemonDetails?.data?.flavor_text_entries[6].flavor_text)}
             </Text>
          </View>

              <Text style = {styles(route.params?.mainColor).mainStatsTitleText}>
                Caracteristics
              </Text>
  
  
  
  
           <View style = {styles().mainStatsSection}>
             
  
             <View style = {styles().cardMainStats} >
               <Text style = {styles().textMainStats}>
                 {route.params?.pokemonHeight}m
               </Text>
               <MaterialCommunityIcons name="ruler-square" size={24} color="black" />
             </View>
  
             <View style = {styles().cardMainStats}>
                <Text style = {styles().textMainStats}>
                 {route.params?.pokemonWeight} kg
                </Text>
               <MaterialCommunityIcons name="scale" size={24} color="black" />
             </View>
          
             
             <View style = {styles().cardMainStats}>
                 <Text style = {styles().textMainStats}>
                   {((route.params?.mainMove?.name).replace(/[^a-zA-Z0-9 ]/g, ' '))} 
                </Text>
                <MaterialCommunityIcons  name="lightning-bolt-outline" size={24} color="black" />
             </View>
             
  
            </View>
  
        
      
    
            <View style = {styles().statsBarSection}>

              <Text style = {styles().statsTitleText}>
                Caracteristics
              </Text>

             <PokemonStatBar 
                progressValue = {route.params?.pokemonStats[0]?.base_stat}
                nameStat ={route.params?.pokemonStats[0]?.stat?.name}
              />
            
             <PokemonStatBar 
               progressValue = {route.params?.pokemonStats[1]?.base_stat}
               nameStat ={route.params?.pokemonStats[1]?.stat?.name}
              />
            
              <PokemonStatBar 
               progressValue = {route.params?.pokemonStats[2]?.base_stat}
               nameStat ={route.params?.pokemonStats[2]?.stat?.name}
              />
            
              <PokemonStatBar 
               progressValue = {route.params?.pokemonStats[3]?.base_stat}
               nameStat ={route.params?.pokemonStats[4]?.stat?.name}
              />
            
              <PokemonStatBar 
               progressValue = {route.params?.pokemonStats[4]?.base_stat}
               nameStat ={route.params?.pokemonStats[4]?.stat?.name}
              />
           </View>

        </View>

   </ScrollView>

</SafeAreaView>
  )
}

const styles = (mainColor) => StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: `${mainColor}`,
    //alignItems: 'center',
    },

  scrollView: {
   
   flexGrow: 1,
   flexDirection: 'column',
  },

  header: {
    height: 320,
    //backgroundColor: `${mainColor}`,
    justifyContent: 'flex-start',
    paddingLeft: 12


  },

  titlePokemon:{
   
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: "#FFF",
    alignSelf: 'flex-start'

  },

  numberPokemon:{
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: "#FFF"

  },

  mainImage: {
    top: 110,
    
    left: 70,
    position:'absolute',
    //alignSelf: 'center',
    width: 250,
    height: 250,
    zIndex: 100
  },

  containerPokemonData:{
   
   
    width: '100%',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#FFF',
    padding: 10

  },

  descriptionSection:{
    
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 50,
    
    width: "100%",
    
    
  },

  titleDescription:{
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 40,
    fontWeight: 'bold',
    color: `${mainColor}`
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
    color: `${mainColor}`

  },
   mainStatsSection:{
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'space-between',
     width: "100%",
     paddingHorizontal: 35,
     backgroundColor: '#FFF',
     paddingBottom: 60,

   }, 

   cardMainStats: {
     alignItems: 'center',
     alignContent: 'center',
     justifyContent: 'center'
   },

   textMainStats:{
   
     fontSize: 24,
     textTransform: 'capitalize'
   },

   statsTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: `${mainColor}`

  },

  statsBarSection: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: "#FFF"
    },

  


}) 

