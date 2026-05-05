import { View, Pressable, Text } from 'react-native'
import { StyleSheet } from 'react-native';

const estilosConteudo = StyleSheet.create({
    texto: {
        color: "#ddd",
    }
})

export default function Conteudo() {
    
    return(
        <View style={{padding:20}}>
        <Text style={{ fontSize: 20,color:"White"}}>Time1: Alice Marchi, Beatriz Carneiro, 
        Gabriel Henrique, Maria Eloiza e Maria Luísa</Text>

        <Text> Alice Marchi - fez o Menu </Text>
        <Text> Beatriz Carneiro - fez o Botão </Text>
        <Text> Gabriel Henrique - fez o Card </Text>
        <Text> Maria Eloiza - fez o Rodapé </Text>
        <Text> Maria Luísa - fez o Conteudo </Text>

        </View>
    );
}