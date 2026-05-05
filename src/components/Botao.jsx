import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Image } from 'react-native'


const estilosCabecalho = StyleSheet.create({
botao:
{

}
})
export default function Botao({aluno, setAluno, imagem}) {
  return (
   <Pressable onPress={() => setAluno(aluno)}>
    {/* <Image source={require('../../assets/', imagem)}></Image> */}
    <Text>{aluno}</Text>
    </Pressable>
  )
}