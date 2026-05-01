import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/cabecalho';
import Rodape from './components/Rodape';
import Menu from './components/Menu';
import Card from './components/Card';

export default function App() {
  const paginaPrincipal = (
          <Text style={styles.texto}>
            "Sobre a equipe no futuro, aqui"
          </Text>
  )

   const sobreEquipe = (
          <Text style={styles.texto}>
            "Sobre a equipe no futuro, aqui"
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