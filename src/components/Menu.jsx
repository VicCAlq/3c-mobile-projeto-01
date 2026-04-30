import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Botao from './Botao'


const EstilosMenu = StyleSheet.create({
  menu: {
    backgroundColor: "#222",
    padding: 20,
    margin: 20,
    borderRadius: 10
  },
  titulo: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10
  },
  botaoMenu: {
    backgroundColor: "#111",
    color: "#ddd",
    border: "2px solid #48a",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  },
  botaoMenuSelecionado: {
    backgroundColor: "#246",
  }
})

export default function Menu({
  alunoSelecionado, 
  setAluno, 
  setCodigo, 
  codigoThais, 
  codigoLaura, 
  codigoGustavo, 
  codigoFernanda
}) {
  return (
    <View style={EstilosMenu.menu}>
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Thais"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoThais}
        estilos={EstilosMenu}
      />
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Laura"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoLaura}
        estilos={EstilosMenu}
      />
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Gustavo"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoGustavo}
        estilos={EstilosMenu}
      />
            <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Fernanda"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoFernanda}
        estilos={EstilosMenu}
      />
    </View>
  )
}
