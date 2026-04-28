import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Menu from './components/Menu';

export default function App() {

  const [conteudo, setConteudo] = useState("Conteudo principal")

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaPrincipal={
          <View>
            <Text style={styles.texto}>
              Conteúdo principal futuramente aqui
            </Text>
            <Menu/>

          </View>
        }
        sobreEquipe={
          <Text style={styles.texto}>
            "Sobre a equipe futuramente aqui"
          </Text>
        }
        mudarPagina={setConteudo}
      />
      {conteudo}
      <StatusBar style="auto" />
    </View>
  );
}