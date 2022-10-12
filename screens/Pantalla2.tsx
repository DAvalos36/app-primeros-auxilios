import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native-ui-lib'
import React from 'react'

const Pantalla2 = (): JSX.Element => {
  return (
    <View useSafeArea style={styles.container}>
      {/* <Text>Pantalla2</Text> */}
      <View style={styles.superior}>
        <Text text50>Pantalla2</Text>
        <Text text50>Pantalla22</Text>
      </View>

      <View style={styles.contentido}>

      </View>
    </View>
  )
}

export default Pantalla2

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  superior: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  contentido: {
    flex: 10
  }
})
