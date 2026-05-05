import { View, StyleSheet } from 'react-native'
import Botao from './Botao'

export default function Menu({ setAlunoSelecionado }) {
  return (
    <View style={styles.botaoEstrutura}>
      <Botao nome="Renan" setAluno={setAlunoSelecionado} />
      <Botao nome="Manuella" setAluno={setAlunoSelecionado} />
       <Botao nome="Renato" setAluno={setAlunoSelecionado} />
        <Botao nome="Guilherme" setAluno={setAlunoSelecionado} />
         <Botao nome="Chris" setAluno={setAlunoSelecionado} />
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