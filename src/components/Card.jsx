import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function Card({ aluno }) {

  if (!aluno) {
    return <Text style={styles.aviso}>Selecione um aluno</Text>
  }

  const dados = {
    JoãoPedro: `
 Questão 6 - Lista - Muito Fácil
Crie um array (também com const ao invés de let) chamado "numeros" com os valores
7, 2, 4, 9, 8, 6, 1 nesta ordem. Armazene na variável "resposta06" o resultado do
número no índice zero multiplicado pelo item no penúltimo índice.
*/
// Array na linha abaixo
const numeros = [7, 2, 4, 9, 8, 6, 1]
let resultadoMulti = numeros[0] * numeros[5]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta06 = resultadoMulti

 Questão 10 - Laços - Muito Difícil
Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
Armazene o novo array na variável resposta09.
*/
// Escreva o código da solução abaixo:

let vogal = [];
let indece5 = 0;
while(indece5 <= 9){

  verificação = nomes[indece5].toLowerCase();

  if(verificação == A || E || I || O || U || Á || É || Ó || Í || Ú)
  {
     vogal += nomes[indece5];
  }
  indece5++;
}
export const resposta09 = vogal;

Questão 02 - Revisão - Entender muita coisa
export const resposta02 = "Abacate" ?? "Abacate"

 Questão 10 - Revisão - Não ajudou a entender nada
export const resposta10 = false ?? true
`,

    Elyson: `
Questão 1 - Lista - Muito Fácil
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo
let profissoes = []
// Operações necessárias e resposta a partir da linha abaixo
profissoes.push("Programador(a)", "Designer", "Engenheiro(a)", "Veterinário(a)", "Administrador(a)")
export const resposta01 = profissoes

 Questão 4 - Laços - Muito Difícil
Utilizando um laço de repetição for, calcule a média aritmética de todos os números
múltiplos de 3 entre 1 e 200 (incluindo os limites). Armazene o resultado 
(pode ser decimal) na variável resposta04.
*/
// Escreva o código da solução abaixo:
let somaMultiplos3 = 0;
let quantidadeMultiplos3 = 0;
for (let i = 1; i <= 200; i += 1) {
  if (i % 3 === 0) {
    somaMultiplos3 += i;
    quantidadeMultiplos3 += 1;
  }
}
export const resposta04 = somaMultiplos3 / quantidadeMultiplos3

Questão 2 - Revisão - Entender muita coisa
export let objetoQualquer = [ "preda", "papel", "gon adulto"]

 Questão 1 - Revisão - Não ajudou a entender nada
export let musicaFavorita = "Kung Fu Fight"
`,

    Samara: `
Questão 1 - Listas - Muito fácil
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
// Array na linha abaixo
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = frutas[1]


Questão 8 - Laços - Muito difícil
let soma = 0
for(let contador = 0; contador <= 100; contador++){
  soma += contador
  console.log(soma)
}

export const resposta01 = soma

Questão 7 - Revisão - Entender muita coisa
export const resposta07 = false != true == true

Questão 7 - Revisão - Não ajudou a entender nada
export const vinteETres = 18 + (33 % 7)
`,

    LucasCarson: `
    Questão 1 - Listas - Muito fácil
const frutas = ["maçã", "banana", "laranja", 
"uva", "pêra", "manga"];

export const resposta01 = frutas[1];

Questão 2 - Laços - Muito difícil
Utilizando um laço de repetição while, calcule a soma de todos os números ímpares
de 1 até 50 (incluindo 50). Armazene o resultado da soma na variável resposta02.
*/
// Escreva o código da solução abaixo:
let impares = 1;
let somaImpar = 0; 
while (impares <= 50){
  somaImpar += impares;
  impares += 2;
  console.log(somaImpar)
}
export const resposta02 = somaImpar;

Questão 1 - Revisão - Entender muita coisa
export let funcaoImportante = true

Questão 7 - Revisão - Não ajudou a entender nada
export const oitentaEQuatro = (200 / 4) + 34
    `,
    
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
    minHeight: 300,
  },

  scroll: {
    marginTop: 5,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#7ccec4',
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
    backgroundColor: '#84a4d1',
    borderRadius: 8,
    fontSize: 14,
  }
})