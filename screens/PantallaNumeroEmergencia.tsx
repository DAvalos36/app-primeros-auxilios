import { StyleSheet, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ElementoNumeroEmergencia from '../components/ElementoNumero'

import type { Props as InfoNum } from '../components/ElementoNumero'

const info: InfoNum[] = [{ numero: '911', titulo: 'Novecientos 11' }]

const PantallaNumeroEmergencia = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FlatList data={info} renderItem={ElementoNumeroEmergencia} />
    </View>
  )
}

export default PantallaNumeroEmergencia

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
})
