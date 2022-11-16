import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View, Colors } from 'react-native-ui-lib'
import { FontAwesome } from '@expo/vector-icons'

const Cuadradito = (): JSX.Element => {
  return (
    <View style={styles.Cuadradito} >
      <FontAwesome name="phone" size={45} color="black" />
    </View>
  )
}
interface Props {
  numero: string
  titulo: string
}
const ElementoNumeroEmergencia = (): JSX.Element => {
  return (
    <View style={styles.contenedor}>
      <Cuadradito />
      <Text text50 style={{ flex: 1, flexWrap: 'wrap' }}>Cruz Roja</Text>
    </View>
  )
}

export default ElementoNumeroEmergencia

const styles = StyleSheet.create({
  contenedor: {
    padding: 10,
    // paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Cuadradito: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 15,
    width: 60,
    aspectRatio: 1,
    marginRight: 10
  }
})
