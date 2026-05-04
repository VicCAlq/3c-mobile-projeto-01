import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'
import Botao from './Botao'

export default function Card() {
    
    const codigoEverton = <View>
        <Text>
            Códigos de Everton são esses
        </Text>
        
    </View>

    const codigoRayane = "Texto com os códigos de Rayane"

    const codigoHelena = "Texto com os códigos de Helena"
    
    const codigoPablo = "Texto com os códigos de Pablo"

    const codigoCauã = "Texto com os códigos de Cauã"
    
    const [alunoSelecionado, setAlunoSelecionado] = useState("")
    const [codigo, setCodigo] = useState(codigoEverton)

    return(
        <View>
            <Menu
                alunoSelecionado={alunoSelecionado}
                setAluno={setAlunoSelecionado}
                setCodigo={setCodigo}
                codigoEverton={codigoEverton}
                codigoRayane={codigoRayane}
                codigoHelena={codigoHelena}
                codigoPablo={codigoPablo}
                codigoCauã={codigoCauã}
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