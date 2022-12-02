import { StyleSheet, ImageBackground } from 'react-native'
import { Text, View, Carousel, LoaderScreen } from 'react-native-ui-lib'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { supabase } from '../supabase'

import ElementoInteres from '../components/ElementoInteres'

import type { Interes } from '../types/PrimerosAuxilios'

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
  const [intereses, setIntereses] = useState<Interes[]>([])
  const [cargando, setCargando] = useState<boolean>(true)

  const consultar = async (): Promise<void> => {
    console.log('entra')
    const { data: PRMAUXInteres, error } = await supabase
      .from('PRMAUX_Interes')
      .select('*')
    if (error != null) {
      console.log(error)
      return
    }
    if (PRMAUXInteres == null) {
      console.log('no hay datos')
      return
    }
    const interesesRes = PRMAUXInteres as Interes[]
    setIntereses(interesesRes)
    setCargando(false)

    console.log(PRMAUXInteres)
  }

  useEffect(() => {
    console.log('useEffect')
    void consultar()
  }, [])

  // eslint-disable-next-line no-constant-condition
  if (cargando) {
    return <LoaderScreen message='Cargando...' />
  } else {
    return (
      <View style={styles.container} >
        <View style={styles.containerInicio}>
          <Text text40 >Inicio</Text>
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
          <Text text40 >Interes!</Text>
          <FlatList data={intereses} renderItem={ElementoInteres} />
        </View>
      </View>
    )
  }
}

export default Pantalla1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  containerInicio: {
    flex: 3,
    borderRadius: 20,
    marginBottom: 15
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
