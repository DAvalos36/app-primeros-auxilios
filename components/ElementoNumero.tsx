import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { Text, View, Colors, TouchableOpacity } from 'react-native-ui-lib'
import { FontAwesome } from '@expo/vector-icons'

const Cuadradito = (): JSX.Element => {
  return (
    <View style={styles.Cuadradito} >
      <FontAwesome name="phone" size={45} color="black" />
    </View>
  )
}
export interface Props {
  numero: string
  titulo: string
}
const ElementoNumeroEmergencia = ({ item, index }: { item: Props, index: number }): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const llamar = async () => {
    const numero = `tel:${item.numero}`
    try {
      await Linking.openURL(numero)
    } catch (error) {
      alert(`El numero telefonico es es: ${item.numero}`)
    }
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    <TouchableOpacity activeBackgroundColor='#666' onPress={() => { llamar() }} style={styles.contenedor}>
      <Cuadradito />
      <Text text50 style={{ flex: 1, flexWrap: 'wrap' }}>{item.titulo}</Text>
    </TouchableOpacity>
  )
}

export default ElementoNumeroEmergencia

const styles = StyleSheet.create({
  contenedor: {
    padding: 10,
    marginVertical: 2,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 15,
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
