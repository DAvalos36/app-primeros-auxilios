import { StyleSheet } from 'react-native'
import { View, Text, Button, Incubator, Colors } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import ElementoBusqueda from '../components/ElementoBusqueda'
import ElementoPaso from '../components/ElementoPaso'

const Pantalla2 = (): JSX.Element => {
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
        <View style={styles.superiorContenedorBoton}>
          <Button label='idk'/>
        </View>
      </View>

      <View style={styles.contentido}>
        <ElementoBusqueda nombre='asdasd'/>
        <ElementoPaso item='asdasd' index={1} />
        <ElementoPaso item='asdasd' index={2} />
        <ElementoPaso item='laksdjlka' index={3} />
      </View>
    </SafeAreaView>
  )
}

export default Pantalla2

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    borderWidth: 1,
    borderColor: Colors.$outlinePrimary,
    padding: 4,
    borderRadius: 18,
    backgroundColor: Colors.$backgroundDisabled
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
