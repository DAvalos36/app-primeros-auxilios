import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View, Colors } from 'react-native-ui-lib'

const Bolita = ({ numero }: { numero: number }): JSX.Element => {
  return (
    <View style={styles.bolita} >
      <Text text50 white>{ numero }</Text>
    </View>
  )
}

const ElementoPaso = ({ item, index }: { item: string, index: number }): JSX.Element => {
//   else {
  const par: boolean = index % 2 === 0
  return (
    <View style={[styles.contenedor, par ? { paddingLeft: 0 } : undefined]}>
      <Bolita numero={index} />
      <Text style={{ flex: 1, flexWrap: 'wrap' }}>{item}</Text>
    </View>
  )
//   }
}

export default ElementoPaso

const styles = StyleSheet.create({
  contenedor: {
    padding: 10,
    // paddingLeft: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  bolita: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 100,
    width: 60,
    aspectRatio: 1,
    marginRight: 10
  }
})
