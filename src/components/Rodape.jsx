import { View, Pressable, Text, StyleSheet } from 'react-native'


const estilosRodape = StyleSheet.create({
    rodape: {
        marginBottom: "0px",
        padding: "20px",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",


    },
    texto: {
        color: '#22e1e7ff',
        fontFamily: 'sans',
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default function Rodape() {
    return (
        <View style={estilosRodape.rodape}>
            <Text style={estilosRodape.texto}>Feito por: Maria Eloiza, Maria Luísa, Beatriz, Alice e Gabriel.</Text>
            <Pressable onPress={() => Alert.alert('Rodapé pressionado!')}
                style={({ pressed }) => [
                    { backgroundColor: pressed ? '#d3d61eff' : '#fffad3' }]
                }>https://github.com/VicCAlq/3c-mobile-projeto-01/tree/Luisa-Eloiza-Gabriel-Beatriz-Alice
                </Pressable>
        </View>
    )
}
