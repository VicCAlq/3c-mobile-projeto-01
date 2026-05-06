import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { View, ScrollView } from 'react-native';

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

      <ScrollView style={{ flex: 1, width: '100%' }}>
        {pagina === "principal" ? (
          <View style={{ width: '100%' }}>
            <Menu setAlunoSelecionado={setAlunoSelecionado} />
            <Card aluno={alunoSelecionado} />
          </View>
        ) : (
          <Conteudo />
        )}
      </ScrollView>

      <Rodape />

      <StatusBar style="auto" />
    </View>
  );
}
