import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'
import Botao from './Botao'

export default function Card() {
    
    const codigoThais = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
    </View>

    const codigoLaura = "Texto com códigos de Laura"

    const codigoGustavo = "Texto com códigos de Gustavo"
    
    const codigoFernanda = "Texto com códigos de Fernanda"

    const [alunoSelecionado, setAlunoSelecionado] = useState("Thais")
    const [codigo, setCodigo] = useState(codigoThais)

    return(
        <View>
            <Menu
                alunoSelecionado={alunoSelecionado}
                setAluno={setAlunoSelecionado}
                setCodigo={setCodigo}
                codigoThais={codigoThais}
                codigoLaura={codigoLaura}
                codigoGustavo={codigoGustavo}
                codigoFernanda={codigoFernanda}
            ></Menu>
            <View>
                <Text style={{color: "white"}}>
                    Códigos de {alunoSelecionado}:
                    {codigo}
                </Text>
            </View>
        </View>
    )
}