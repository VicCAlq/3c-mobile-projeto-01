import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/cabecalho';
import Rodape from '. /components/rodape';
import Card from './components/card';
import Botao from './components/ botao';
import Menu from './components/ menu';

export default function App() {

  const [conteudo, setConteudo] = useState(<Card/>)

  return (
    <View style={styles.container}>
      
      <Cabecalho
        paginaPrincipal={<Card/>}
        sobreEquipe={
          <Text style={styles.texto}>
            Sobre a equipe futuramente aqui
          </Text>
        }
        mudarPagina={setConteudo}
      />

      <View style={{ flex: 1 }}>
        {conteudo}
      </View>

      <Rodape />

      <StatusBar style="auto" />
    </View>
  );
}