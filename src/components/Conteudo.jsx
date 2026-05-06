import { View, Text, Image, StyleSheet } from 'react-native';

const fotos = {
  elyson: require('../../assets/elysonf.png'),
  joaoPedro: require('../../assets/joaop.png'),
  samara: require('../../assets/marap.png'),
  lucasCarson: require('../../assets/lucasc.png'),
};

export default function Conteudo() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
       <Image source={fotos.elyson} style={styles.foto}/>
        <Text style={styles.nome}>Elyson</Text>
        <Text style={styles.funcao}>Fez o Card</Text>
      </View>

      <View style={styles.card}>
       <Image source={fotos.joaoPedro} style={styles.foto}/>
        <Text style={styles.nome}>JoãoPedro</Text>
        <Text style={styles.funcao}>Fez o Rodapé</Text>
      </View>

        <View style={styles.card}>
       <Image source={fotos.samara} style={styles.foto}/>
        <Text style={styles.nome}>Samara</Text>
        <Text style={styles.funcao}>Fez o Conteúdo</Text>
      </View>

        <View style={styles.card}>
       <Image source={fotos.lucasCarson} style={styles.foto}/>
        <Text style={styles.nome}>LucasCarson</Text>
        <Text style={styles.funcao}>Fez o botão</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  card: {
    alignItems: 'center',
    margin: 10,
  },

  foto: {
    width: 180,
    height: 180,
    borderRadius: 40,
    marginBottom: 5,
  },

  nome: {
    fontWeight: 'bold',
  },

  funcao: {
    fontSize: 12,
    color: '#555',
  }
});