import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Details from './pages/Details'
import Search from './pages/Search'

const Stack = createNativeStackNavigator()

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Pokédex',
          headerTitleAlign: 'center',
          headerTintColor: "#FFF",
          
          headerStyle:{
            backgroundColor: '#D10000'
          },
          
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Pokémon Details',
         
          headerStyle:{
            backgroundColor: '#FFF'
          }
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default Routes
