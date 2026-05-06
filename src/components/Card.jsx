import { View, Text, StyleSheet, ScrollView } from 'react-native'

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

    Manuella: `
Questão 3 - Listas(indices) - Fácil
Continuando com o array criado na questão 1, altere o quarto item da lista para
a fruta "abacaxi". Na variável "resposta03" envie a lista completa com a nova fruta.

export const resposta03 = frutas
frutas[3] = "abacaxi"

Questão 09 - Laços(while) - Difícil
const nomesComVogais = []
let indice9 = 0
const vogais = ["A","E","I","O","U"]

while(indice9 < nomes.length) {
  let nomeGuardado = nomes[indice9];
  let primeiraLetra = nomeGuardado[0]
  if(vogais.includes(primeiraLetra))
    nomesComVogais.push(nomeGuardado)
  
  indice9++
}
export const resposta09 = nomesComVogais

Questão 10 - Laços(for) - Ajudou a entender muita coisa
const petsExoticos = [
  "lagarto", "tarântula", "hamster", "cacatua", "iguana",
  "escorpião", "sagui", "jacaré", "serpente", "camaleão"
]

const petsComR = [];
const letraR = "r";

for (let i = 0; i < petsExoticos.length; i++) {
  if(petsExoticos[i].includes(letraR)) {
    petsComR.push(petsExoticos[i])
  }
}
export const resposta10 = petsComR

Questão 18 - Revisão - Não ajudou a entender nada
export let oCeuEhAzulVerdadeOuNao = true
`,

    Renato: `
Questão 03 - listas - muito fácil
frutas[3] = "abacaxi"
export const resposta03 = frutas

Questão 08 - funções - muito difícil
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
let impares = 0

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    impares++
  }
}
export const resposta02 = impares

Questão 03 - funções - não ajudou a entender nada
function ehPositivo(number2) {
  if (number2 > 0) {
    return true
  } else {
    return false
  }
} 
export const resposta03 = ehPositivo
`,

    Guilherme: `
    Questão 02 - listas - Fácil
  Ainda utilizando o array criado na questão 1, armazene na variável "resposta02"
o último item da lista. Use a propriedade "length" para auxiliar a encontrar
o índice deste último item.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta02 = frutas[frutas.length - 1] 

    Questão 02 - laços - Difícil
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

    Questão 12 - funções - ajudou a entender
Crie uma função chamada "elementosComNumeroPar" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo apenas 
os elementos (objetos completos) cujo número atômico é par. Envie na 
resposta a função criada, sem executá-la (basta enviar o nome da 
função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function elementosComNumeroPar(elementos){
  let yuta = []
  for(let rika = 0; rika < elementos.length; rika++ ){
    if(elementos[rika].numeroAtomico % 2 === 0){
      yuta.push(elementos[rika])
    }
  }
  return yuta
}
export const resposta12 = elementosComNumeroPar


   Questão 10 - laços - não ajudou a entender
  Crie uma função chamada "buscarPorNumeroAtomico" que recebe dois 
argumentos: a lista "elementos" e um número atômico. A função deve 
retornar o objeto do elemento que possui aquele número atômico, 
ou null se não encontrar. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function buscarPorNumeroAtomico(elementos, numeroAtomico){
  for(let z = 0; z < elementos.length; z++){
    if(elementos[z].numeroAtomico === numeroAtomico){
      return elementos[z]
    }
  else{
    return null
  }
}
}
export const resposta10 = buscarPorNumeroAtomico
   
`,
    
    Izabella: `Fácil - listas: exercício 1
/* Questão 3
Continuando com o array criado na questão 1, altere o quarto item da lista para
a fruta "abacaxi". Na variável "resposta03" envie a lista completa com a nova fruta.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta03 = frutas
frutas[3] = "abacaxi"

Difícil - laços, exercício 2
/* Questão 12
Encerrando com a lista de pets exóticos, use um laço de repetição for...of para
encontrar o primeiro nome que começa com a letra "s". Se encontrar, armazene este
nome na variável resposta12. Se não encontrar nenhum, armazene a string "não encontrado".

const petsExoticos = [
  "lagarto", "tarântula", "hamster", "cacatua", "iguana",
  "escorpião", "sagui", "jacaré", "serpente", "camaleão"
]
*/
// Escreva o código da solução abaixo:
let nomeQueComecaComS = ""
for(let nome of petsExoticos){
  if(nome[0] == "s"){
    nomeQueComecaComS = nome
    break
  } else{
    nomeQueComecaComS = "não encontrado"
  }
}
export const resposta12 = nomeQueComecaComS

Entender algo - funções, exercício 1
/* Questão 12
Crie uma função chamada "elementosComNumeroPar" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo apenas 
os elementos (objetos completos) cujo número atômico é par. Envie na 
resposta a função criada, sem executá-la (basta enviar o nome da 
função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function elementosComNumeroPar(elementos){
  const novaLista = []
  let indice6 = 0
  while(indice6<elementos.length){
    if(elementos[indice6].numeroAtomico % 2 == 0){
        novaLista.push(elementos[indice6])
    }
    indice6++
  }
  return novaLista
}
export const resposta12 = elementosComNumeroPar

Entender nada - lista, exercício 2
/* Questão 13
Seguindo com a lista de pedras, use os métodos shift e pop para mover os três
primeiros itens para o final da lista. Após isso, aplique o método reverse, e
envie a lista na resposta13.
*/
// Operações necessárias e resposta a partir da linha abaixo

pedras.push(pedras.shift())
pedras.push(pedras.shift())
pedras.push(pedras.shift())

pedras.reverse()
export const resposta13 = pedras`
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Códigos de {aluno}</Text>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={true}>
        <Text style={styles.codigo}>{dados[aluno]}</Text>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 15,
    backgroundColor: '#f8f9ff',
    borderRadius: 12,
    elevation: 4,
    maxHeight: 400, 
  },

  scroll: {
    marginTop: 5,
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