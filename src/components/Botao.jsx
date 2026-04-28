import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Image } from 'react-native'

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#333",
        marginTop: 10,},    
    img: {
        width: 50,
        height: 50,
        borderRadius: 10
    }   
})

export default function Botao({img, texto, clicar}) {
    return (
        <Pressable onPress={clicar} style={styles.botao}>
            <Image source={img} style = {styles.img} />
            <Text>{texto}</Text>
        </Pressable>
    )
}