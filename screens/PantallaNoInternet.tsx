import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-ui-lib'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

const PantallaNoInternet = ({ f }: { f: () => void }): JSX.Element => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="wifi-off" size={54} color="black" />
      <Text>No hay conexion a internet...</Text>
      <Button label="Reintentar" onPress={f} />
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
