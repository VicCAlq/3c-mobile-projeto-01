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
    backgroundColor: "#91c1aa",
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  botaoCabecalho: {
    backgroundColor: "#4a7862",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "rgb(66, 143, 107)",
  },

  botaoCabecalhoSelecionado: {
    backgroundColor: "#4a7862",
  },

  texto: {
    color: "#ddd",
    fontWeight: "bold"
  }
})