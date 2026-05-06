import { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import Menu from "./Menu";

const estilosCard = StyleSheet.create({
  codigo: {
    backgroundColor: "#e88087"
  },
  titulo: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "2px",
    

  },
   texto: {
    fontSize: "16px",
    width: '1200px',
    

  }
})

export default function Card() {

  const [conteudoDoCard, setConteudoDoCard] = useState(
    <Text>Nenhum aluno selecionado</Text>
  )
  const [aluno, setAluno] = useState("alice")

  const codigosAlunos = {
    alice: <View>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito fácil:
      </Text>
      <Text style={estilosCard.texto}>
        1. Exercício 1 de listas, questão 8  
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito difícil:
      </Text>
      <Text style={estilosCard.texto}>
        Exercício 1 de funcoes, questão 4
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que o ajudou a entender muita coisa:
      </Text>
      <Text style={estilosCard.texto}>
        3. Exercício 2 de laços, questão 1


      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que não ajudou a entender nada:
      </Text>
      <Text style={estilosCard.texto} >
        3. Exercício 1 lacos, questão 5

      </Text>

      
    </View>,


    beatriz: <View>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito fácil:
      </Text>
      <Text style={estilosCard.texto}>
        export const resposta02 = frutas[frutas.length-1]
        (Questão 2, atividade de listas)
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito difícil:
      </Text>
      <Text style={estilosCard.texto}>
        (Questão 11 do exercício de funções)
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que o ajudou a entender muita coisa:
      </Text>
      <Text style={estilosCard.texto}>
        (questão 9 do exercício de laços-while)


      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que não ajudou a entender nada:
      </Text>
      <Text style={estilosCard.texto} >
        (operadores logicos ex de revisão)

      </Text>


    </View>,


    luisa: <View>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito fácil:
      </Text>
      <Text style={estilosCard.texto}>
        const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
        export const resposta01 = frutas[1]
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito difícil:
      </Text>
      <Text style={estilosCard.texto}>
        Questão 8 do exercício de funções
        </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que o ajudou a entender muita coisa:
      </Text>
      <Text style={estilosCard.texto}>
        let indice = 1;
      let somaFinal = 0;
      let numInicial = 0;
      let numProximo = 0;
      while(indice=32)
      numProximo+=indice
      somafinal = numInicial + numProximo;
      indice++
    export const resposta01 = somaFinal;
    (Exercício 1 de laços de reprodução)
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que não ajudou a entender nada:
      </Text>
      <Text style={estilosCard.texto}>
        Exercício 8 do assunto 2 de laços
      </Text>
    </View>,


    eloiza: <View>
      <Text style={estilosCard.titulo}>
      Uma questão que achou muito fácil: 
      </Text>
      <Text style={estilosCard.texto}>
        questão 2 da atividade de listas  "Ainda utilizando o array criado na questão 1,
         armazene na variável "resposta02" o último item da lista. Use a propriedade "length" para auxiliar a encontrar
          o índice deste último item.questão 2 da atividade de listas " 
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que achou muito difícil: 
      </Text>
      <Text style={estilosCard.texto}>
        questão 11 da atividade 2 de listas "Crie (usando const) uma lista vazia chamada "pedras", e use nela o método concat para adicionar os itens "quartzo", "basalto" e "granito". Use o método reverse nessa lista, e após isso use o método push para adicionar os itens
        "calcário", "mármore" e "mica". Use o método reverse novamente, e envie a lista
        final na resposta11."
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que o ajudou a entender muita coisa: 
      </Text>
      <Text style={estilosCard.texto}>
        questão 7 da atividade 1 sobre listas, pois me ajudou a memorizar o assunto, colocando em prática os conceitos mais importantes repetidas vezes.
      </Text>
      <Text style={estilosCard.titulo}>
        Uma questão que não ajudou a entender nada: 
      </Text>
      <Text style={estilosCard.texto} >
        acredito que todas as questões me ajudaram de alguma forma, exceto as que eu não consegui entender o que era para fazer.
      </Text>

      <Text style={estilosCard.titulo}>
        As questões devem fazer parte de dos exercícios a seguir: 
      </Text>
      <Text style={estilosCard.texto}>
        questões que peçam para fazer determinada coisa repetidas vezes,
         pois ajuda a memorizar e aprender como podemos usar e escrever os códigos
      </Text>
      </View>,


    gabriel: 
      <View>
        <Text style={estilosCard.titulo}>
          Uma questão que achou muito fácil:
        </Text>
        <Text style={estilosCard.texto}>
          Questão 5 da lista de funções, de contar trava língua
        </Text>
        <Text style={estilosCard.titulo}>
          Uma questão que achou muito difícil:
        </Text>
        <Text style={estilosCard.texto}>
          Questão 9 da lista de funções, de contar elementos
        </Text>
        <Text style={estilosCard.titulo}>
          Uma questão que o ajudou a entender muita coisa:
        </Text>
        <Text style={estilosCard.texto}>
          Questão 7 da atividade de listas
        </Text>
        <Text style={estilosCard.titulo}>
          Uma questão que não ajudou a entender nada:
        </Text>
        <Text style={estilosCard.texto} >
          Todas as questões deram pra absorver alguma coisa
        </Text>

        <Text style={estilosCard.titulo}>
          As questões devem fazer parte de dos exercícios a seguir:
        </Text>
        <Text style={estilosCard.texto}>
          questões mais simples sobre o assunto pra depois ir aumentando o nível, com ajuda de como resolver
        </Text>
      </View>
  }

  return(
    <View style={{
      backgroundColor: "#FF928B",
      borderRadius: "8px",
      margin: "15px",
      padding: "10px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      width: "90vw",
    }}>
      <Menu setAluno={setAluno}/>
      <View>{codigosAlunos[aluno]}</View>
    </View>
  )
}