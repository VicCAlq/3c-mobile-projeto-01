import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Linking } from 'react-native'

const estiloDoRodape = StyleSheet.create({
    Rodape:{
    position: "absolute",
    bottom: 0,
    backgroundColor: "#c01111",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    },
    textoDoRodape:{
        color: "rgb(4, 250, 168)"
    },
    linkDoRodape:{
        color: "rgb(63, 97, 86)"
    }
})

export default function Rodape(){
    return(
    <View style={estiloDoRodape.Rodape}>
        <text style={estiloDoRodape.textoDoRodape}>
            feito por Thais, Laura, Fernanda e Gustavo 
        </text>
      <text style={estiloDoRodape.textoDoRodape}>
          https://github.com/VicCAlq/3c-mobile-projeto-01.git
            </text>
    </View>
    )
}