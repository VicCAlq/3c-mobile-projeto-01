import { View } from 'react-native'
import Botao from './Botao'

export default function Menu({ 
  setAluno,
}) {

  return (
    <View>

      <Botao
        texto="Samuel Guilherme"
        img={require("../../assets/samuel.jpeg")}
        setAluno={setAluno}
        aluno={1}
      />

      <Botao
        texto="Carlos Felipe"
        img={require("../../assets/felpe.jpeg")}
        setAluno={setAluno}
        aluno={2}
      />

      <Botao
        texto="Leonardo Aragão"
        img={require("../../assets/leo.jpeg")}
        setAluno={setAluno}
        aluno={3}
      />
      <Botao
        texto="Calebe Aubertino"
        img={require("../../assets/calebe.jpeg")}
        setAluno={setAluno}
        aluno={4}
      />
    
    </View>
  )
}