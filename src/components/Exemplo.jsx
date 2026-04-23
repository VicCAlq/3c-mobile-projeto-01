import { View, Pressable, Text } from 'react-native'
import { styles } from '../styles/main'
import { useState } from 'react'

export default function Exemplo({titulo, children}) {
  const textosAleatorios = [
    'Sonic conseguiu uma Esmeralda do Caos.',
    'A princesa está em outro castelo.',
    'Eu já fui um aventureiro feito você, mas um dia levei uma flechada no joelho.',
    'Eu sou literalmente um palhaço. Qual sua desculpa?',
    'Mas se recusou.',
    'Glorifique o sol!',
    'Nanomáquinas, meu filho.',
    'Nada é verdade, e tudo é permitido.',
    'HEY! VEJA!',
    'Aperte "F" para prestar homenagem.',
    'O bolo é uma mentira!',
    'Toda sua base nos pertence.',
    'O que é o ser humano? Uma pilha miserável de segredos!',
    'É perigoso ir sozinho. Leve isto.'
  ]

  function selecioneFraseAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * textosAleatorios.length)
    return textosAleatorios[indiceAleatorio]
  }

  const [frase, setFrase] = useState(selecioneFraseAleatoria())

  return(
    <View style={styles.exemplo}>
      <Text style={styles.texto}>Clicar no botão abaixo faz ele exibir uma frase aleatória.</Text>
      <Pressable style={styles.botaoExemplo} onPress={() => setFrase(selecioneFraseAleatoria())}>
        <Text style={styles.texto}>{frase}</Text>
      </Pressable>
      <View>
        <Text style={styles.texto}>Abaixo, exibição do children</Text>
        <h1 style={styles.texto}>{titulo}</h1>
        {children}
      </View>
    </View>
  )
}
