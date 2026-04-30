import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/cabecalho';
import Rodape from './components/Rodape';
import Menu from './components/Menu';
import Card from './components/Card';

export default function App() {

  const [conteudo, setConteudo] = useState(<Card/>)

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaPrincipal={<Card/>}
        sobreEquipe={
          <Text style={styles.texto}>
            "Sobre a equipe futuramente aqui"
          </Text>
        }
        mudarPagina={setConteudo}
      />
      <view Rodape={{ flex: 1}}>
        {conteudo}
      </view>

      <Rodape />
    
    

      <StatusBar style="auto" />
    </View>
  );
}