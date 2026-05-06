import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Pressable, Text } from 'react-native'

const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#7e638c',
    marginBottom: "20px",
    marginTop: "0px",
    display: 'flex',
    width: '100vw',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoCabecalho: {
    backgroundColor: "#359",
    color: "black",
    padding: '10px',
    borderRadius: '10px',
    margin: '10px',
  }
})

export default function Cabecalho({
  paginaInicial, sobreEquipe, mudarPagina
}) {
  const [selecionado, setSelecionado] = useState("principal")

  return(<View style={estilosCabecalho.cabecalho}>
    <Pressable 
      style={() => [
        estilosCabecalho.botaoCabecalho,
        {
          backgroundColor: selecionado === "principal"
            ? "#fffad3"
            : "#f6e3539f"
        }
      ]}
      onPress={() => {
        mudarPagina(paginaInicial)
        setSelecionado("principal")
      }}
    >
      Página principal
    </Pressable>
    <Pressable 
      style={() => [
        estilosCabecalho.botaoCabecalho,
        {
          backgroundColor: selecionado === "sobreEquipe"
            ? "#fffad3"
            : "#f6e3539f"
        }
      ]}
      onPress={() => {
        mudarPagina(sobreEquipe)
        setSelecionado("sobreEquipe")
      }}
    >
      Sobre a equipe
    </Pressable>
  </View>)
}