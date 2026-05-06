import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.rodape}>

      <Pressable onPress={() => Linking.openURL('https://github.com/VicCAlq/3c-mobile-projeto-01')}>
        <Text style={styles.link}>
          https://github.com/VicCAlq/3c-mobile-projeto-01
        </Text>
      </Pressable>

      <Text style={styles.textos}>
        Criado por:
      </Text>

      <Text style={styles.nomes}>
        JoãoPedro, Elyson, Samara, LucasCarson (3° C)
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  rodape: {
    backgroundColor: '#91c1aa',
    padding: 10,
    alignItems: 'center',
    width: '100%'
  },

  link: {
    color: '#00bfff',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  textos: {
    color: '#ddd',
    fontSize: 12,
  },

  nomes: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 2,
  }
})