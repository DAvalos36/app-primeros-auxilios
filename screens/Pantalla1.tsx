import { StyleSheet, ImageBackground } from 'react-native'
import { Text, View, Carousel, Image } from 'react-native-ui-lib'
import React from 'react'

const info = ['abc', 'dos', 'tres']

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
