import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Botao from './Botao'


const EstilosMenu = StyleSheet.create({
  menu: {
    backgroundColor: "#4e0e9742",
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
    backgroundColor: "#4e0e9742",
    color: "#ddd",
    border: "2px solid rgb(170, 68, 99)",
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
  codigoEverton, 
  codigoRayane, 
  codigoHelena, 
  codigoPablo,
  codigoCauã
}) {
  return (
    <View style={EstilosMenu.menu}>
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Everton"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoEverton}
        estilos={EstilosMenu}
      />
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Rayane"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoRayane}
        estilos={EstilosMenu}
      />
      <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Helena"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoHelena}
        estilos={EstilosMenu}
      />
            <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Pablo"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoPablo}
        estilos={EstilosMenu}
      />
        <Botao
        alunoSelecionado={alunoSelecionado}
        aluno={"Cauã"}
        setAluno={setAluno}
        setCodigo={setCodigo}
        codigo={codigoCauã}
        estilos={EstilosMenu}
      
      />
    </View>
  )
}
