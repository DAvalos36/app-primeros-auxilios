import { StyleSheet } from 'react-native'
import { View, Incubator, Colors } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ElementoBusqueda from '../components/ElementoBusqueda'
import { FlatList } from 'react-native-gesture-handler'

import { problemas } from '../infoInicial'
import { HStackNavigationProp } from '../Navigation/StackNavigation'

const Pantalla2 = (): JSX.Element => {
  const navigation = useNavigation<HStackNavigationProp>()
  return (
    <SafeAreaView style={{ flex: 1 }} >
      {/* <Text>Pantalla2</Text> */}
      <View style={styles.superior}>
        <View style={styles.superiorContenedorBarra} >
          <Incubator.TextField
            placeholder='Buscar'
            style={ styles.barraBuscar }
          />
        </View>
      </View>

      <View style={styles.contentido}>
        <FlatList data={problemas} renderItem={({ index, item }) => <ElementoBusqueda item={ item } index={ index } navigation={navigation} /> } />
      </View>
    </SafeAreaView>
  )
}

export default Pantalla2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  superior: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2
  },
  superiorContenedorBarra: {
    flex: 7,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4
    // backgroundColor: 'red'
  },
  barraBuscar: {
    width: '100%',
    height: 40,
    // borderWidth: 1,
    // borderColor: Colors.$outlinePrimary,
    padding: 4,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  superiorContenedorBoton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentido: {
    flex: 10
  }
})
