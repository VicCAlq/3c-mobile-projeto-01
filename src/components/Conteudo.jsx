import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    texto:{
        color: "white"
    }
})

export default function Conteudo() {
  return (
    <View>

      <Text style = {styles.texto}>
        Carlos Felipe: Editou o componente Menu.
      </Text>
      <Text style = {styles.texto}>
        Calebe Aubertino: Editou o componente Conteudo.
      </Text>
      <Text style = {styles.texto}>
        Leonardo Aragão: Editou o Rodape.
      </Text>
      <Text style = {styles.texto}>
        Samuel Souza: Estruturou o Projeto.
      </Text>

    </View>
  )
}