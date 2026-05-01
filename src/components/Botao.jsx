import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Botao({alunoSelecionado, aluno, setAluno, setCodigo, codigo, estilos}) {

    return (
        <Pressable
            style={() => [estilos.botaoMenu,
                {
                backgroundColor: alunoSelecionado === aluno ?
                    "#246" :
                    "#111"
                }
            ]}
            onPress={() => {
                setAluno(aluno)
                setCodigo(codigo)
            }}
        >
            <Text style={{color: "white"}}>
                {aluno}
            </Text>
        </Pressable>
    )
}