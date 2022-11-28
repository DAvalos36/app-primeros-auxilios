/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { StyleSheet, ImageBackground, Linking } from 'react-native'
import { View, Text, Colors, Button } from 'react-native-ui-lib'
import React from 'react'
import Markdown from 'react-native-markdown-display'
import { ScrollView } from 'react-native-gesture-handler'

// eslint-disable-next-line @typescript-eslint/no-empty-interface

import { Caso2 } from '../types/PrimerosAuxilios'
import { problemas } from '../infoInicial'

const PantallaProblema2 = (): JSX.Element => {
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
      <ImageBackground style={styles.imgCabecera} source={{ uri: problemas[3].linkImagen }} >
        <Text text30 color={Colors.primary} underline >{problemas[3].titulo}</Text>
      </ImageBackground>
      <View style={{ flex: 1, padding: 10, paddingBottom: 10 }} >
        <Markdown>{problemas[4].contenido}</Markdown>

        {true && <Button label='Llamar a emergencaias' onPress={() => { void llamar('911') }} backgroundColor={Colors.red30} style={{ marginTop: 10 }} />}
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
