import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import Pantalla2 from './screens/Pantalla2'
import Pantalla1 from './screens/Pantalla1'

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pantalla 1" component={Pantalla1} />
      <Tab.Screen name="Pantalla 2" component={Pantalla2} />
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}