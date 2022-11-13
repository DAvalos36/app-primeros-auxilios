import { StyleSheet, ImageBackground } from 'react-native'
import { Text, View, Carousel } from 'react-native-ui-lib'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import ElementoInteres from '../components/ElementoInteres'

const info = ['abc', 'dos', 'tres']

const temp = [{ titulo: 'abbc' }, { titulo: 'dos' }, { titulo: 'tres' }, { titulo: 'cuatro' }, { titulo: 'cuatro' }, { titulo: 'ultimoos' }]

const ElementoCarrusel = ({ texto }: { texto: string }): JSX.Element => {
  return (
    <View style={styles.containerImgCarrusel}>
      <ImageBackground
        style={styles.imgCarrusel} source={{ uri: 'https://picsum.photos/500/300' }}
        resizeMode='cover' >
        <Text text50>{texto}</Text>
      </ImageBackground>
    </View>
  )
}

const Pantalla1 = (): JSX.Element => {
  return (
    <View style={styles.container} >
      <View style={styles.containerInicio}>
        <Text text40>Inicio</Text>
        <Carousel
          autoplay
          loop
        >
          {info.map((item, index) => (
            <ElementoCarrusel key={index} texto={item} />
          ))}
        </Carousel>
      </View>
      <View style={styles.containerInteres}>
        <Text text40>Interes</Text>
        <FlatList data={temp} renderItem={ElementoInteres} />
      </View>
    </View>
  )
}

export default Pantalla1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  containerInicio: {
    flex: 3,
    borderRadius: 20
  },
  containerInteres: {
    flex: 7
  },
  containerImgCarrusel: {
    paddingHorizontal: 8,
    borderRadius: 50
  },
  imgCarrusel: {
    width: '100%',
    aspectRatio: 6 / 3,
    borderRadius: 20,
    justifyContent: 'flex-end'
  }
})
