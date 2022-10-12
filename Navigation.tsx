import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import Pantalla2 from './screens/Pantalla2'
import Pantalla1 from './screens/Pantalla1'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()

const MyTabs = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pantalla 1" component={Pantalla1}
        options={{
          title: 'Pantalla 1',
          tabBarLabel: 'Información',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="info" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Pantalla 2" component={Pantalla2}
        options={{
          headerShown: false,
          tabBarLabel: 'Primeros Auxilios',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="healing" size={size} color={color}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation (): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MyTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
