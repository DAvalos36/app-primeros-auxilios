import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationProp } from '@react-navigation/stack'

import { Caso2 } from '../types/PrimerosAuxilios'

import Pantalla2 from '../screens/Pantalla2'
import PantallaProblema2 from '../screens/PantallaProblema2'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type StackNavigationParamList = {
  Busqueda: undefined
  Problema: Caso2
}

export type HStackNavigationProp = StackNavigationProp<StackNavigationParamList, 'Problema'>

const Stack = createStackNavigator<StackNavigationParamList>()

const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Busqueda" component={Pantalla2}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Problema" component={PantallaProblema2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export { StackNavigation }
