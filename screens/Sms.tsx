import { StyleSheet, View } from 'react-native'
import { Button, Text, StateScreen, Incubator, Colors } from 'react-native-ui-lib'
import React, { useState, useEffect, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as SMS from 'expo-sms'
import * as Location from 'expo-location'

const Sms = (): JSX.Element => {
  const [iniMensaje, setIniMensaje] = useState('')
  const [iniNumero, setIniNumero] = useState('')

  const [numeroTelefono, setNumeroTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [permiso, setPermiso] = useState<boolean>(true)
  const [link, setLink] = useState<string | null>(null)

  const fu = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setPermiso(false)
      return
    }
    setPermiso(true)
    const location = await Location.getCurrentPositionAsync({})
    setLink(`http://www.google.com/maps/place/${location.coords.latitude},${location.coords.longitude}`)
    console.log(`${location.coords.latitude}, ${location.coords.longitude}`)
  }

  const cargarInfo = async (): Promise<void> => {
    const numeroTelefono = await AsyncStorage.getItem('numeroTelefono')
    if (numeroTelefono !== null) {
      setNumeroTelefono(numeroTelefono)
      setIniNumero(numeroTelefono)
    }
    const mensaje = await AsyncStorage.getItem('mensaje')
    if (mensaje !== null) {
      setMensaje(mensaje)
      setIniMensaje(mensaje)
    }
  }

  const guardarInfo = async (): Promise<void> => {
    console.log('guardarInfo')
    if (numeroTelefono !== '') {
      await AsyncStorage.setItem('numeroTelefono', numeroTelefono)
      await AsyncStorage.setItem('mensaje', mensaje)

      setIniNumero(numeroTelefono)
      setIniMensaje(mensaje)
    }
  }

  const MandarSMS = async (): Promise<void> => {
    if (link == null) {
      return
    }
    const res = await SMS.sendSMSAsync(iniNumero, `${iniMensaje}
      ${link}`)
    if (res.result === 'sent') {
      alert('SMS enviado')
    } else {
      alert('SMS no enviado')
    }
  }

  useEffect(() => {
    void fu()
    void cargarInfo()
  }, [])

  if (!permiso) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Es necesario dar permisos de ubicacion para esta funcion!</Text>
        <Button label='Dar permisos' onPress={() => { void fu() }} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Incubator.TextField style={styles.inputs}
          placeholder={'Numero de contacto'}
          floatingPlaceholder
          maxLength={10}
          onChangeText={(text) => setNumeroTelefono(text)}
          value={numeroTelefono}
        />
        <Incubator.TextField style={styles.inputs}
          placeholder={'Mensaje de emergencia'}
          floatingPlaceholder
          maxLength={159}
          onChangeText={(text) => setMensaje(text)}
          value={mensaje}
          // showCharCounter
        />
        { numeroTelefono !== iniNumero || mensaje !== iniMensaje
          ? <Button backgroundColor={Colors.cyan20} activeBackgroundColor={Colors.cyan40} style={styles.botones} label='Guarda informacion' marginV onPress={() => { void guardarInfo() }}/>
          : null }
      </View >
      <View>
        { link != null
          ? <Text center>¡Localizdo!</Text>
          : null }
        <Button disabled={iniNumero === '' && iniMensaje === '' && link !== null} disabledBackgroundColor={Colors.$backgroundDisabled} backgroundColor={Colors.$iconDanger} activeBackgroundColor={Colors.$iconDangerLight} label='Enviar SMS' onPress={() => { void MandarSMS() } } />
      </View>
      {/* <Text text50 >{link}</Text> */}
    </View>
  )
}

export default Sms

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'space-between'
  },
  inputs: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  botones: {
    marginVertical: 10
  }
})
