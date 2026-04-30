import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Image } from 'react-native'

const styles = StyleSheet.create({
    card:{
        backgroundColor: "red"
    },
    text: {
      color: "white"
    }
})
 export default function Card({ aluno }) {

  const codigo1 = <Text style={styles.text}>Código aluno 1</Text>
  const codigo2 = <Text style={styles.text}>Código aluno 2</Text>
  const codigo3 = <Text style={styles.text}>Código aluno 3</Text>
  const codigo4 = <Text style={styles.text}>Código aluno 4</Text>

  return (<View key={aluno}>
    <Text style={styles.text}>Teste</Text>
    {aluno === 1 && codigo1}
    {aluno === 2 && codigo2}
    {aluno === 3 && codigo3}
    {aluno === 4 && codigo4}
  </View>)
}
