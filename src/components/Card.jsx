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
    Renato: `
  Questão 03 - listas - muito fácil
Continuando com o array criado na questão 1, altere o quarto item da lista para
a fruta "abacaxi". Na variável "resposta03" envie a lista completa com a nova fruta.
*/
// Operações necessárias e resposta a partir da linha abaixo
frutas[3] = "abacaxi"
export const resposta03 = frutas

  Questão 08 - funções - muito difícil
Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma 
palavra como argumento e retorna uma lista (array) contendo apenas os 
trava-línguas que possuem aquela palavra. Dica: percorra a lista com 
um loop while, verifique se cada item inclui a palavra usando o método 
.includes(), e adicione à nova lista apenas os que atenderem à condição. 
Envie na resposta a função criada, sem executá-la (basta enviar 
o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function buscarTravaLinguasComPalavra(palavra) {
   let resultado = []
   let ind2 = 0

   while (ind2 < travaLinguas.length) {
    if(travaLinguas[ind2].includes(palavra)) {
      resultado.push(travaLinguas[ind2])
    }
    ind2++
   }
   return resultado
} 
export const resposta08 = buscarTravaLinguasComPalavra

  Questão 02 - laços - entender muita coisa
Utilizando um laço de repetição for, calcule quantos números ímpares existem entre
1 e 50 (incluindo o 1 e 50). Armazene a quantidade encontrada na variável resposta02.
*/
// Escreva o código da solução abaixo:
let impares = 0
let ind2
for (let ind2 = 1; ind2 <= 50; ind2++) {
  if (ind2 % 2 !== 0) {
    impares++
  }
}
export const resposta02 = contadorImpares

  Questão 03 - funções - não ajudou a entender nada
Crie uma função chamada "ehPositivo" que recebe um número como argumento e 
retorna true se o número for maior que zero, ou false caso contrário. 
Envie na resposta a função criada, sem executá-la (basta enviar o nome 
da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function ehPositivo(number2) {
  if (number2 > 0) {
    return true
  } else {
    return false
  }
} 
export const resposta03 = ehPositivo

`,
    Guilherme: `coloque os códigos aq`,
    Chris: `coloque os códigos aq`
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