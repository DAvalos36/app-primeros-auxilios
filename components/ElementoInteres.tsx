/* eslint-disable indent */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, TouchableOpacity, View } from 'react-native-ui-lib'

// SE UTILIZARA DESPUES..
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { Interes } from '../types/PrimerosAuxilios'

const ElementoInteres = ({ item, index }: { item: Interes, index: number }): JSX.Element => {
  return (
      <TouchableOpacity activeBackgroundColor='#666' throttleTime={1000} style={ styles.container } onPress={() => { alert('pico item: ' + index.toString()) } }>
        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Image
            style={styles.imgElementoInteres}
            source={{ uri: item.link_img }}
          />
        </View>
        <View style={{ flex: 7, paddingLeft: 5 }}>
          <Text text60>{item.titulo}</Text>
          <Text>{item.contenido}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderRadius: 15,
    paddingLeft: 5
  },
  imgElementoInteres: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20
  }
})

export default ElementoInteres
