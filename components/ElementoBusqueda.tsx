import { StyleSheet } from 'react-native'
import React from 'react'
import { ListItem, Text, Icon } from 'react-native-ui-lib'

import { Caso2 } from '../types/PrimerosAuxilios'
import { HStackNavigationProp } from '../Navigation/StackNavigation'

const ElementoBusqueda = ({ item, index, navigation }: { item: Caso2, index: number, navigation: HStackNavigationProp }): JSX.Element => {
  return (
    <ListItem activeBackgroundColor='lightgray' onPress={() => navigation.navigate('Problema', item) } style={ styles.contenedor }>
      <ListItem.Part left >
        {/* <Text>Izquierda</Text> */}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Icon style={{ marginRight: 5 }} source={ require('../assets/2048px-Cruz_Roja.svg.png') } size={52} />
      </ListItem.Part>
      <ListItem.Part middle >
        <Text text60> { item.titulo }</Text>
      </ListItem.Part>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 0.5,
    margin: 10
  }
})

export default ElementoBusqueda
