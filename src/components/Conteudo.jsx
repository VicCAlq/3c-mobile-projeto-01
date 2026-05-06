import { View, Text, Image, StyleSheet } from 'react-native';

export default function Conteudo() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
       <Image source={require('../../assets/renan.png')} style={styles.foto}/>
        <Text style={styles.nome}>Pedro Renan</Text>
        <Text style={styles.funcao}>Fez o Card</Text>
      </View>

      <View style={styles.card}>
       <Image source={require('../../assets/manuella.png')} style={styles.foto}/>
        <Text style={styles.nome}>Manuella</Text>
        <Text style={styles.funcao}>Fez o Rodapé</Text>
      </View>

        <View style={styles.card}>
       <Image source={require('../../assets/guilherme.png')} style={styles.foto}/>
        <Text style={styles.nome}>Guilherme</Text>
        <Text style={styles.funcao}>Fez o Conteúdo</Text>
      </View>

        <View style={styles.card}>
       <Image source={require('../../assets/chris.png')} style={styles.foto}/>
        <Text style={styles.nome}>Izabella</Text>
        <Text style={styles.funcao}>Fez o botão</Text>
      </View>

        <View style={styles.card}>
       <Image source={require('../../assets/lucas.png')} style={styles.foto}/>
        <Text style={styles.nome}>Lucas Renato</Text>
        <Text style={styles.funcao}>Fez o Menu</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
     marginTop: 250,
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
    color: '#231549ff',
  }
});