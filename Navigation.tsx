import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import Pantalla2 from './screens/Pantalla2'
import Pantalla1 from './screens/Pantalla1'

const Tab = createBottomTabNavigator()

const MyTabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pantalla 1" component={Pantalla1}
        // options={{ title: 'Pantalla 1' }}
      />
      <Tab.Screen name="Pantalla 2" component={Pantalla2}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation (): JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
