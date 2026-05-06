import { View, StyleSheet } from 'react-native'
import Botao from './Botao'

export default function Menu({ setAlunoSelecionado }) {
  return (
    <View style={styles.botaoEstrutura}>
      <Botao nome="JoãoPedro" setAluno={setAlunoSelecionado} />
      <Botao nome="Elyson" setAluno={setAlunoSelecionado} />
       <Botao nome="Samara" setAluno={setAlunoSelecionado} />
        <Botao nome="LucasCarson" setAluno={setAlunoSelecionado} />
    </View>
  )
}

const styles = StyleSheet.create({
  botaoEstrutura: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
});