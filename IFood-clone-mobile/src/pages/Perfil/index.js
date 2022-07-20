import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from './style'
import { Text } from 'react-native'

export default function Perfil() {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
       <Text>Perfil</Text>
      </SafeAreaView>
    </>
  )
}