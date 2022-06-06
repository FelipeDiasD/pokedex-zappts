import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ReturnColor from '../../Utilites/Colors'

export default function PokemonStatBar ({progressValue, nameStat}) {
    const statColor = ReturnColor(nameStat)
    
    return(
        <View style = {styles().barContainer}>
        <Text style = {styles().statText}> {nameStat} </Text>
            <View style = {styles().progressBar}>
              <View style= { styles(progressValue, statColor).progress}/>
            </View>
        </View>


    )
}

styles = (progressValue, statColor) => StyleSheet.create({
barContainer:{

 padding : 7,
 flexDirection: 'row',
 justifyContent: 'space-between',
 backgroundColor: '#FFF',
 width: "100%",
 


},
    progressBar: {
        height: 5,
        flexDirection: "row",
        width: '50%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 30,
        marginRight: 5,

        shadowColor: "#000",
        shadowOffset: {
	     width: 0,
	     height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

      },
    progress:{
        ...StyleSheet.absoluteFill,
        width: `${progressValue/1.5}%`,
        height: '100%',
        borderRadius: 30,
        backgroundColor: `${statColor}`


    }  ,

    statText:{
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '600'
    }
})