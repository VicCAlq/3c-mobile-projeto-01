import { View, Pressable, Text } from 'react-native'
import { StyleSheet } from 'react-native';

const estilosConteudo = StyleSheet.create({
    texto: {
        color: "#CC4400",
        alignContent: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    titulo: {
        color: "#CC4400",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
   
})

export default function Conteudo() {
    
    return(
        <View style={{padding:20}}>
        <Text style={estilosConteudo.titulo}>Time1: Alice Marchi, Beatriz Carneiro, 
        Gabriel Henrique, Maria Eloiza e Maria Luísa</Text>

        <Text style={estilosConteudo.texto}> Alice Marchi - fez o Menu </Text>
        <Text style={estilosConteudo.texto}> Beatriz Carneiro - fez o Botão </Text>
        <Text style={estilosConteudo.texto}> Gabriel Henrique - fez o Card </Text>
        <Text style={estilosConteudo.texto}> Maria Eloiza - fez o Rodapé </Text>
        <Text style={estilosConteudo.texto}> Maria Luísa - fez o Conteudo </Text>

        </View>
    );
}