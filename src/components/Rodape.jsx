import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Linking } from 'react-native'

const estiloDoRodape = StyleSheet.create({
    Rodape:{
    position: "absolute",
    bottom: 0,
    backgroundColor: "#4e0e9742",
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    },
    textoDoRodape:{
        color: "rgb(255, 255, 255)"
    },
    linkDoRodape:{
        color: "rgb(85, 215, 255)"
    }
})

export default function Rodape(){
    return(
    <View style={estiloDoRodape.Rodape}>
        <text style={estiloDoRodape.textoDoRodape}>
            feito pelos melhores: Everton, Rayane, Helena, Pablo, Cauã.
        </text>
      <text style={estiloDoRodape.textoDoRodape}>
          https://github.com/VicCAlq/3c-mobile-projeto-01.git
            </text>
    </View>
    )
}