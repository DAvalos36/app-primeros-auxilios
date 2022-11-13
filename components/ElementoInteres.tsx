/* eslint-disable indent */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image, Text, TouchableOpacity, View } from 'react-native-ui-lib'

// SE UTILIZARA DESPUES..
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  id: number
  texto: string
  titulo: string
  imagen: string
}
interface idk {
  titulo: string
}

const ElementoInteres = ({ item, index }: { item: idk, index: number }): JSX.Element => {
  return (
      <TouchableOpacity throttleTime={1000} style={ styles.container } onPress={() => { alert('pico item: ' + index.toString()) } }>
        <View style={{ flex: 3, justifyContent: 'center' }}>
          <Image
            style={styles.imgElementoInteres}
            source={{ uri: 'https://picsum.photos/300/300' }}
          />
        </View>
        <View style={{ flex: 7, paddingLeft: 5 }}>
          <Text text60>Titulo perron {item.titulo} aaa aa</Text>
          <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur animi nihil beatae optio nulla eum nostrum et ullam. Ratione quod dolorum numquam assumenda rerum perferendis?</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  imgElementoInteres: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20
  }
})

export default ElementoInteres
