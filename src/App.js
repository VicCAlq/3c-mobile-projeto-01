import { StatusBar } from 'expo-status-bar';
import { styles } from './src/styles/main';
import { Text, View } from 'react-native';
import Exemplo from './src/components/Exemplo';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo titulo={'Elemento exemplo'}>
        <Text style={styles.texto}>Aqui dentro deste elemento exemplo pode ter qualquer coisa</Text>
      </Exemplo>
      <Text style={styles.texto}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

