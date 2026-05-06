import { Pressable, Text, StyleSheet } from 'react-native';

export default function Botao({ nome, setAluno }) {
  return (
    <Pressable
      onPress={() => setAluno(nome)}
      style={({ pressed }) => [
        styles.botao,
        pressed && styles.botaoPressionado
      ]}
    >
      <Text style={styles.texto}>{nome}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    margin: 6,
    backgroundColor: '#4f9859',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, 
  },

  botaoPressionado: {
    backgroundColor: '#44654b',
    transform: [{ scale: 0.97 }],
  },

  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});