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
  const codigo2 = <Text style={styles.text}>{`MUITO OPERADORES ARITMÉTICOS)
/* Questão 01 */
export const trintaENove = 44 - 10 + 5 
MUITO DIFÍCIL: (ÍNDICES)
/* Questão 7
Seguindo com a lista criada na questão 7, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição),
de modo que a lista se torne 1, 7, 2, 4, 9, 8, 6. Armazene a lista na
variável "resposta07"
*/
// Operações necessárias e resposta a partir da linha abaixo
let temp2 = numeros[numeros.length - 1]
for (let i = numeros.length - 1; i > 0; i--) {
  numeros[i] = numeros[i - 1]
}
numeros[0] = temp2
export const resposta07 = numeros
QUESTÃO QUE AJUDOU A ENTENDER MUITA COISA: (METODOS)
/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo

// Operações necessárias e resposta a partir da linha abaixo
const profissoes = []
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)")
export const resposta01 = profissoes

QUESTÃO QUE NÃO AJUDOU A ENTENDER NADA: (ÍNDICES)

/* Questão 5
Para finalizar com o array da questão 1, troque as posições dos itens "laranja"
e "manga", e armazene a lista modificada completa na variável "resposta05".
*/
// Operações necessárias e resposta a partir da linha abaixo
let temp = frutas[2] 
frutas[2] = frutas[5] 
frutas[5] = temp
export const resposta05 = frutas
`}</Text>
  const codigo3 = <Text style={styles.text}>Código aluno 3</Text>
  const codigo4 = <Text style={styles.text}>{`1. Crie um laço de repetição while que armazene em uma variável a soma dos números
de 1 a 32. Envie o valor resultante na variável resposta01.

2Seguindo com a mesma lista de nomes, crie um novo array contendo apenas os nomes
que começam com vogal (considere A, E, I, O, U, inclusive acentuadas se houver).
Armazene o novo array na variável resposta09.

3
Crie uma função chamada "buscarTravaLinguasComPalavra" que recebe uma 
palavra como argumento e retorna uma lista (array) contendo apenas os 
trava-línguas que possuem aquela palavra. Dica: percorra a lista com 
um loop while, verifique se cada item inclui a palavra usando o método 
.includes(), e adicione à nova lista apenas os que atenderem à condição. 
Envie na resposta a função criada, sem executá-la (basta enviar 
o nome da função sem os parênteses)

4
Crie uma função chamada "saudacao" que não recebe nenhum argumento e retorna 
a string "Bom dia!". Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)`}</Text>

  return (<View key={aluno}>
    <Text style={styles.text}>Teste</Text>
    {aluno === 1 && codigo1}
    {aluno === 2 && codigo2}
    {aluno === 3 && codigo3}
    {aluno === 4 && codigo4}
  </View>)
}
