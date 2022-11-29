import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Pantalla2 from '../screens/Pantalla2'
import PantallaProblema2 from '../screens/PantallaProblema2'

const Stack = createStackNavigator()

const StackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pantalla 2" component={Pantalla2}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Pantalla Pro" component={PantallaProblema2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export { StackNavigation }
