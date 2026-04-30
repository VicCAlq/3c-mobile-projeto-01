import { View } from 'react-native'
import Botao from './Botao'

export default function Menu({ 
  setAluno,
}) {

  return (
    <View>

      <Botao
        texto="Aluno 1"
        img={require("../../assets/1.jpg")}
        setAluno={setAluno}
        aluno={1}
      />

      <Botao
        texto="Aluno 2"
        img={require("../../assets/1.jpg")}
        setAluno={setAluno}
        aluno={2}
      />

      <Botao
        texto="Aluno 3"
        img={require("../../assets/1.jpg")}
        setAluno={setAluno}
        aluno={3}
      />
      <Botao
        texto="Aluno 4"
        img={require("../../assets/1.jpg")}
        setAluno={setAluno}
        aluno={4}
      />
    
    </View>
  )
}