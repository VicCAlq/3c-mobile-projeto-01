import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';
import Principal from './components/Principal';

export default function App() {

  const [conteudo, setConteudo] = useState(<Principal/>)

  return (
    <View style={styles.container}>
      <View>
        <Cabecalho
          paginaPrincipal={<Principal/>}
          sobreEquipe={
            <Conteudo/>
          }
          mudarPagina={setConteudo}
        />
        {conteudo}
      </View>
      <Rodape/>
      <StatusBar style="auto" />
    </View>
  );
}