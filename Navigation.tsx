import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import { StackNavigation } from './Navigation/StackNavigation'
import Pantalla1 from './screens/Pantalla1'
import PantallaNumeroEmergencia from './screens/PantallaNumeroEmergencia'

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
      <Tab.Screen name="Buscar" component={ StackNavigation }
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Numeros de emergencia" component={PantallaNumeroEmergencia}
        options={{
          title: 'Numeros de emergencia',
          tabBarLabel: 'Numeros de emergencia',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="phone-enabled" size={size} color={color} />
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
