import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { styles } from './styles/main';
import { Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

export default function App() {

  const [conteudo, setConteudo] = useState("Conteudo principal")

  return (
    <View style={styles.container}>
      <Cabecalho
        paginaPrincipal={
          <Text style={styles.texto}>
            "Conteudo principal futuramente aqui"
          </Text>
        }
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