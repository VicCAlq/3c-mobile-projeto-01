import { useState } from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'

export default function Cabecalho({ mudarPagina }) {

  const [selecionado, setSelecionado] = useState("principal")

  return (
    <View style={estilosCabecalho.cabecalho}>

      {/* BOTÃO PRINCIPAL */}
      <Pressable
        style={[
          estilosCabecalho.botaoCabecalho,
          selecionado === "principal" && estilosCabecalho.botaoCabecalhoSelecionado
        ]}
        onPress={() => {
          mudarPagina("principal")
          setSelecionado("principal")
        }}
      >
        <Text style={estilosCabecalho.texto}>Página Principal</Text>
      </Pressable>

      {/* BOTÃO SOBRE */}
      <Pressable
        style={[
          estilosCabecalho.botaoCabecalho,
          selecionado === "sobre" && estilosCabecalho.botaoCabecalhoSelecionado
        ]}
        onPress={() => {
          mudarPagina("sobre")
          setSelecionado("sobre")
        }}
      >
        <Text style={estilosCabecalho.texto}>Sobre a Equipe</Text>
      </Pressable>

    </View>
  )
}

const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#54458b",
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },

  botaoCabecalho: {
    backgroundColor: "#4d3279",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "rgba(80, 51, 128, 1)",
  },

  botaoCabecalhoSelecionado: {
    backgroundColor: "rgba(93, 57, 158, 1)",
  },

  texto: {
    color: "#ddd",
    fontWeight: "bold"
  }
})