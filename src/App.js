import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/cabecalho';
import Rodape from './components/Rodape';
import Menu from './components/Menu';
import Card from './components/Card';

export default function App() {
  const paginaPrincipal = <Card/>

   const sobreEquipe = (
          <Text style={styles.texto}>
            "Feito pelo time 5,"OS GAMA".Composto por Cauã Juan, Everton, Helena, Rayane e Pablo. Nessa atividade, separamos os códigos ds conteudos do trimestre que achamos mais fácil,dificil, o que nos ajudou e não ajudou. Só sucesso no futuro."
          </Text>
  )

  const [conteudo, setConteudo] = useState(<Card/>)

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaPrincipal={paginaPrincipal}
        sobreEquipe={sobreEquipe}
        mudarPagina={setConteudo}/>

        {conteudo}
        
        <Rodape/>
        <StatusBar style="auto" />
    </View>
  );
  }