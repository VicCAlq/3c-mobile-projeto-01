import { View } from 'react-native';
import Botao from './Botao';


export default function Menu({ alunos, selecionarAluno }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
      {alunos.map((aluno, index) => (
        <Botao key={index} aluno={aluno} selecionarAluno={selecionarAluno} />
      ))}
    </View>
  );
}

