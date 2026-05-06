import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Image } from 'react-native'


const estilosBotao = StyleSheet.create({
  botao: {
    backgroundColor: "#FEC3A6",
    borderRadius: "5px",
    margin: "10px",
    width: "100px",
    height: "30px",
    padding: "5px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  texto: {
    color: "#ddd",
  }
})

export default function Botao({aluno, setAluno, imagem}) {
  return (
    <Pressable style={estilosBotao.botao} onPress={() => setAluno(aluno)}>
      <Image source={imagem} style={{ width: "20px", height: "20px"}}/>
      <Text>{aluno}</Text>
    </Pressable>
  )
}