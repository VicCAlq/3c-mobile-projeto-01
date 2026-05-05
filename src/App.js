import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { View } from 'react-native';

import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Conteudo from './components/Conteudo';
import Menu from './components/Menu';
import Card from './components/Card';

export default function App() {

  const [pagina, setPagina] = useState("principal")
  const [alunoSelecionado, setAlunoSelecionado] = useState(null)

  return (
    <View style={styles.container}>

      <Cabecalho mudarPagina={setPagina} />

      <View style={{ flex: 1 }}>
        {pagina === "principal" ? (
          <View>
            <Menu setAlunoSelecionado={setAlunoSelecionado} />
            <Card aluno={alunoSelecionado} />
          </View>
        ) : (
          <Conteudo />
        )}
      </View>

      <Rodape />

      <StatusBar style="auto" />
    </View>
  );
}
