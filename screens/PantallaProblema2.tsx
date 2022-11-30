/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { StyleSheet, ImageBackground, Linking } from 'react-native'
import { View, Text, Colors, Button } from 'react-native-ui-lib'
import React from 'react'
import Markdown from 'react-native-markdown-display'
import { ScrollView } from 'react-native-gesture-handler'

import { PantallaProblemaProps } from '../Navigation/StackNavigation'

const PantallaProblema2 = ({ route }: PantallaProblemaProps): JSX.Element => {
  const info = route.params
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const llamar = async (params: string) => {
    try {
      await Linking.openURL(`tel:${params}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView style={styles.container} >
      <ImageBackground style={styles.imgCabecera} source={{ uri: info.linkImagen }} >
        <Text text30 color={Colors.primary} underline >{info.titulo}</Text>
      </ImageBackground>
      <View style={{ flex: 1, padding: 10, paddingBottom: 10 }} >
        <Markdown>{info.contenido}</Markdown>

        {info.peligro && <Button label='Llamar a emergencaias' onPress={() => { void llamar('911') }} backgroundColor={Colors.red30} style={{ marginTop: 10 }} />}
      </View>
    </ScrollView>
  )
}

export default PantallaProblema2

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
