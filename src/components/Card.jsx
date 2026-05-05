import { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Menu from "./Menu";

const estilosCard = StyleSheet.create({
  codigo: {
    backgroundColor: "#888"
  }
})

export default function Card() {

  const [conteudoDoCard, setConteudoDoCard] = useState(
    <Text>Nenhum aluno selecionado</Text>
  )
  const [aluno, setAluno] = useState("alice")

  const codigosAlunos = {
    alice: <View style={estilosCard.codigo}>
        <Text>"console.log('codigo de alice')"</Text>
      </View>,
    beatriz: "console.log('codigo de beatriz')",
    luisa: "console.log('codigo de luisa')",
    eloiza: "console.log('codigo de eloiza')",
    gabriel: "console.log('codigo de gabriel')"
  }

  return(
    <View style={{
      backgroundColor: "#aaa",
      borderRadius: "8px",
      margin: "15px",
      padding: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "90vw",
    }}>
      <Menu setAluno={setAluno}/>
      <View>{codigosAlunos[aluno]}</View>
    </View>
  )
}