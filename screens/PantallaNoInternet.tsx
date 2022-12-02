import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const PantallaNoInternet = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="wifi-off" size={54} color="black" />
      <Text>No hay conexion a internet...</Text>
    </View>
  )
}

export default PantallaNoInternet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
