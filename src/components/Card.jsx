import { View, Text, StyleSheet } from 'react-native'

export default function Card({ aluno }) {

  if (!aluno) {
    return <Text style={styles.aviso}>Selecione um aluno</Text>
  }

  const dados = {
    Renan: `
 Questão 1 - lista - muito fácil
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.


const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
export const resposta01 = frutas[1]

 Questão 10 - laços - muito difícil
Finalizando com a lista de nomes, encontre o nome mais longo da lista.
Se houver empate (mais de um nome com o mesmo comprimento máximo), armazene
apenas o primeiro que aparecer na lista. Coloque o nome encontrado na variável resposta10.

let indQuestao10 = 0
let nomeDoBom = ""
let maiorTamanho = 0

while (indQuestao10 < nomes.length) {
    let numeroLido2 = nomes[indQuestao10]
    if (numeroLido2.length > maiorTamanho) {
        maiorTamanho = numeroLido2.length
        nomeDoBom = numeroLido2
    }

    indQuestao10++
}

Questão 05 - revisão - entender muita coisa
export let noveDivididoPorTres = 3

 Questão 04 - revisão - não ajudou a entender nada
export let tartarugasVoamVerdadeOuNao = "false"

`,

    Manuella: `coloque os códigos aq`,
    Renato: 'coloque os códigos aq',
    Guilherme: 'coloque os códigos aq',
    Chris: 'coloque os códigos aq'
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Códigos de {aluno}</Text>
      <Text style={styles.codigo}>{dados[aluno]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 15,
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    elevation: 4, // sombra Android
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#54458b',
    textAlign: 'center',
  },

  codigo: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 8,
    fontFamily: 'monospace',
  },
aviso: {
  textAlign: 'center',
  marginTop: 20,
  marginHorizontal: 20,
  padding: 10,
  color: '#fff',
  backgroundColor: '#575757',
  borderRadius: 8,
  fontSize: 14,
}
})