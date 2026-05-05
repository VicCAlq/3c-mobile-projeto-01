import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { View, Text } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Card from './components/Card';
import Conteudo from './components/Conteudo';

export default function App() {

  const [conteudo, setConteudo] = useState(<Card/>)

  return (
    <View style={styles.container}>
      <View style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
        <Cabecalho
          paginaPrincipal={<Card/>}
          sobreEquipe={<Conteudo/>}
          mudarPagina={setConteudo}
        />
        {conteudo}
      </View>
      <View style={{
        width: "100vw",
        height: "40px",
        backgroundColor: "#486"
      }}>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

