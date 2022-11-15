import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ListItem, Text, Icon, Colors } from 'react-native-ui-lib'

interface Props {
  nombre: string
}

const ElementoBusqueda = (props: Props): JSX.Element => {
  return (
    <ListItem style={ styles.contenedor }>
      <ListItem.Part left >
        {/* <Text>Izquierda</Text> */}
        <Icon source={{ uri: 'https://cdn.icon-icons.com/icons2/2596/PNG/512/check_one_icon_155665.png' }} size={52} />
      </ListItem.Part>
      <ListItem.Part middle >
        <Text text60>kk</Text>
      </ListItem.Part>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 0.5
  }
})

export default ElementoBusqueda
