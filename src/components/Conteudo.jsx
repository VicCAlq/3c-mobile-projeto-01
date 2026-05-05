import { View, Text, Image, StyleSheet } from 'react-native';

export default function Conteudo() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
       <Image source={{ uri: 'https://i.pinimg.com/1200x/90/72/8e/90728e963e36b3ce10776f71154d5180.jpg' }} style={styles.foto}/>
        <Text style={styles.nome}>Pedro Renan</Text>
        <Text style={styles.funcao}>Fez o Card</Text>
      </View>

      <View style={styles.card}>
       <Image source={{ uri: 'https://i.pinimg.com/1200x/0e/2e/9c/0e2e9cda7a0aba70368556d72673a533.jpg' }} style={styles.foto}/>
        <Text style={styles.nome}>Manuella</Text>
        <Text style={styles.funcao}>Fez o Rodapé</Text>
      </View>

        <View style={styles.card}>
       <Image source={{ uri: 'https://i.pinimg.com/1200x/1b/5d/ea/1b5deadbc09c981298a6e16f2a57143c.jpg' }} style={styles.foto}/>
        <Text style={styles.nome}>Guilherme</Text>
        <Text style={styles.funcao}>Fez o Conteúdo</Text>
      </View>

        <View style={styles.card}>
       <Image source={{ uri: 'https://i.pinimg.com/736x/fe/c6/62/fec66201b47e6396db1795cb1f03d12c.jpg' }} style={styles.foto}/>
        <Text style={styles.nome}>Izabella</Text>
        <Text style={styles.funcao}>Fez o botão</Text>
      </View>

        <View style={styles.card}>
       <Image source={{ uri: 'https://i.pinimg.com/1200x/25/73/e7/2573e78dc48b3dc72bfe96aa22e30da3.jpg' }} style={styles.foto}/>
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