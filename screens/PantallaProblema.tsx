import { StyleSheet, ImageBackground, Linking } from 'react-native'
import { View, Text, Colors, Button } from 'react-native-ui-lib'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import ElementoPaso from '../components/ElementoPaso'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  titulo: string
  introduccion: string
  pasos: string[]
  peligro: boolean
  linkImagen: string
}

const PantallaProblema = (): JSX.Element => {
  return (
    <View style={styles.container} >
      <ImageBackground style={styles.imgCabecera} source={{ uri: 'https://picsum.photos/600/300' }} >
        <Text text30 color={Colors.primary} underline >Nombre problema:</Text>
      </ImageBackground>
      <View style={{ flex: 1, padding: 20, paddingBottom: 10 }} >
        <Text text50>Introduccion:</Text>
        <Text text70>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse maiores qui fugiat repellendus asperiores ipsam natus perspiciatis molestias, omnis quam unde laudantium, officiis architecto ad, sunt commodi possimus ratione. Nulla.</Text>
        <Text text50 style={{ marginTop: 8 }}>Pasos a seguir:</Text>
        <FlatList data={['abac', 'efga', 'jkasdñaksdñlaskñdlasdklañsdlñaskñlasdkñladslkj', 'abc', 'efg', 'jkl', 'abc', 'efg', 'jkl', 'abc', 'efg', 'jkl']} renderItem={ElementoPaso} />
        {/* Aqui abajo va a ir la variable peligro */}
        {true && <Button label='Llamar a emergencias' backgroundColor={Colors.red30} style={{ marginTop: 10 }} />}
      </View>
    </View>
  )
}

export default PantallaProblema

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgCabecera: {
    width: '100%',
    aspectRatio: 7 / 4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
