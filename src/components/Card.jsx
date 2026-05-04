import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'
import Botao from './Botao'

export default function Card() {
    
    const codigoThais = <View>
        <Text>
            Sobre a Lista de Laços 
        </Text>
    </View>

    const codigoLaura = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
    </View>

       const codigoGustavo = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
    </View>
    
       const codigoFernanda = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
    </View>

    const [alunoSelecionado, setAlunoSelecionado] = useState("Thais")
    const [codigo, setCodigo] = useState(codigoThais)

    return(
        <View style={{
            display: "flex", 
            flexDirection: "row", 
            width: "100vw",
            justifyContent: "flex-start",
            padding: "20px",
            gap: "30px",
        }}>
            <Menu
                alunoSelecionado={alunoSelecionado}
                setAluno={setAlunoSelecionado}
                setCodigo={setCodigo}
                codigoThais={codigoThais}
                codigoLaura={codigoLaura}
                codigoGustavo={codigoGustavo}
                codigoFernanda={codigoFernanda}
            ></Menu>
            <View style={{
                maxWidth: "80vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
                <Text style={{color: "white"}}>
                    Códigos de {alunoSelecionado}:
                    {codigo}
                </Text>

            </View>
        </View>
    )
}