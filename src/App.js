import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Botao from './components/Botao';
import Conteudo from './components/Conteudo';

export default function App() {

  const [conteudo, setConteudo] = useState("Conteudo principal")

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaPrincipal={

        <Botao imagem={"marialuisa.jpeg"} aluno={"Maria Luisa"}/>
        
        }
        sobreEquipe={
          <Conteudo/>

         
        }
        mudarPagina={setConteudo}
      />
      {conteudo}
      <StatusBar style="auto" />
    </View>
  );
}

