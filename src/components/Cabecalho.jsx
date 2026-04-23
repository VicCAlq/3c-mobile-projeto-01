import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text } from 'react-native'

const estilosCabecalho = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#333",
    margin: "0px 0px 0px auto",
    height: "70px",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    padding: "0px auto",
  },
  botaoCabecalho: {
    backgroundColor: "#111",
    color: "#ddd",
    border: "2px solid #48a",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  },
  botaoCabecalhoSelecionado: {
    backgroundColor: "#246",
  }
})

export default function Cabecalho({
  paginaPrincipal, sobreEquipe, mudarPagina
}) {
  const [selecionado, setSelecionado] = useState("principal")

  return (
    <View style={estilosCabecalho.cabecalho}>
      <Pressable
        style={() => [
          estilosCabecalho.botaoCabecalho,
          {
            backgroundColor: selecionado !== "principal" ?
              "#111" :
              "#246"
          }
        ]}
        onPress={() => {
          mudarPagina(paginaPrincipal)
          setSelecionado("principal")
        }}
      >
        Página principal
      </Pressable>
      <Pressable
        style={() => [
          estilosCabecalho.botaoCabecalho,
          {
            backgroundColor: selecionado === "principal" ?
              "#111" :
              "#246"
          }
        ]}
        onPress={() => {
          mudarPagina(sobreEquipe)
          setSelecionado("sobreEquipe")
        }}
      >
        Sobre a Equipe
      </Pressable>
    </View>
  )
}
