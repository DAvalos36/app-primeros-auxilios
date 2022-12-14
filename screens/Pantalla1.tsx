import { StyleSheet, ImageBackground } from 'react-native'
import { Text, View, Carousel, LoaderScreen, TouchableOpacity } from 'react-native-ui-lib'
import React, { useEffect, useState } from 'react'
import { openBrowserAsync } from 'expo-web-browser'
import { useNetInfo } from '@react-native-community/netinfo'
import { FlatList } from 'react-native-gesture-handler'
import { supabase } from '../supabase'

import ElementoInteres from '../components/ElementoInteres'

import type { Interes, RespuestaSalud, Articulos } from '../types/PrimerosAuxilios'
import PantallaNoInternet from './PantallaNoInternet'

const ElementoCarrusel = ({ title, url, urlToImage, publishedAt }: Articulos): JSX.Element => {
  const verNoticia = async (): Promise<void> => {
    try {
      await openBrowserAsync(url)
    } catch (error) {
      alert(`La url es: ${url}`)
    }
  }

  return (
    <TouchableOpacity onPress={() => { void verNoticia() } } style={styles.containerImgCarrusel}>
      <ImageBackground
        style={styles.imgCarrusel} source={{ uri: urlToImage }}
        resizeMode='cover' >
        <Text text100 white >{publishedAt}</Text>
        <Text text50 underline cyan20 >{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const Pantalla1 = (): JSX.Element => {
  const netInfo = useNetInfo()

  const [noInternet, setNoInternet] = useState(true)
  const [cargando, setCargando] = useState<boolean>(true)

  const [intereses, setIntereses] = useState<Interes[]>([])
  const [articulos, setArticulos] = useState<Articulos[]>([])

  const probarInternet = (): void => {
    if (netInfo.isConnected === false && netInfo.isInternetReachable === false) {
      setNoInternet(true)
    } else {
      setNoInternet(false)
      void consultarArticulos()
      void consultar()
    }
  }

  const consultarArticulos = async (): Promise<void> => {
    const res = await fetch('https://newsapi.org/v2/everything?pageSize=20&q=salud&language=es&apiKey=c842e0f9412f42878b1d0bddb8b7b67d')
    const data = await res.json() as RespuestaSalud
    setArticulos(data.articles)
  }

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
    void probarInternet()
  }, [netInfo])

  // eslint-disable-next-line no-constant-condition
  if (noInternet) {
    return <PantallaNoInternet f={ probarInternet } />
  } else if (cargando) {
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
            {articulos.map((item, index) => (
              <ElementoCarrusel key={index} {...item} />
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
