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
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false
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
