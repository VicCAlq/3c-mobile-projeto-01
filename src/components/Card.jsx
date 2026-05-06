import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'
import Botao from './Botao'

export default function Card() {


    const codigoEverton = 
    <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
            <Text>
                Sobre os códigos
            </Text>
            <Text>   </Text>
            <Text>
                Uma questão que achou muito fácil: 
            </Text>
            <Text>{"let yuta = 0"}</Text>
                <Text>{"let rika = 0"}</Text>
                <Text>{"while (rika <= 100) {"}</Text>
                    <Text>{"  if(rika % 7 ==  0){"}</Text>
                        <Text>{"    yuta = yuta + rika"}</Text>
                    <Text>{"  }"}</Text>
                    <Text>{"  rika++"}</Text>
                    <Text>{"  console.log(yuta)"}</Text>
                <Text>{"}"}</Text>

            <Text>       </Text>

            <Text>
                Uma questão que achou muito difícil: 
            </Text>
            <Text>{"let nagi = [ ]"}</Text>
            <Text>{"for(let reo of petsExoticos){"}</Text>
            <Text>{"  if(reo.includes('r')){"}</Text>
            <Text>{"    nagi.push(reo)"}</Text>
            <Text>{" }"}</Text>
 
            <Text>{"}"}</Text>
            <Text>     </Text>
        </View>
        <View style={{display: "flex", flexDirection: "column", left: 100, marginTop: "-3px" }}>
            <Text>  </Text>
            <Text>  </Text>
            <Text>
                Uma questão que o ajudou a entender muita coisa: Foi a questão 8 da segunda lista de exercicios
            </Text>
            <Text>{"let bolinha = []"}</Text>
        <Text>{"for(let cesar = 0; cesar < itensDomesticos.length; cesar++ ){"}</Text>
            <Text>{"  bolinha.unshift(itensDomesticos[cesar])"}</Text>
        <Text>{"}"}</Text>
        <Text>   </Text>
        <Text>
            Uma questão que não ajudou a entender nada: Foi a questão 8 da segunda lista de exercicios
        </Text>
       <Text>{"let somma = 0"}</Text>
    <Text>{"for(let b = -100; b <= -1; b++){"}</Text>
    <Text>{"  if(b % 2 === 0){"}</Text>
    <Text>{"    somma += b"}</Text>
    <Text>{"  }"}</Text>
    <Text>{"  //console.log(somma)"}</Text>
    <Text>{"}"}</Text>

        </View>   
    </View>



    const codigoHelena = 
<View style={{display: "flex", flexDirection: "row"}}>
    
    <View style={{display: "flex", flexDirection: "column"}}>
        <Text>
            Sobre os Códigos
        </Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito fácil: 
        </Text>

        <Text>{"let soma = 0"}</Text>
        <Text>{"let i = 0"}</Text>
        <Text>{"while(i <= 32){"}</Text>
        <Text>{"  soma = soma + i"}</Text>
        <Text>{"  i++"}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta01 = soma"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito difícil:
        </Text>

        <Text>{"// Operações necessárias e resposta a partir da linha abaixo"}</Text>
        <Text>{"let ultimos = numeros[numeros.length - 1]"}</Text>
        <Text>{"numeros[6] = numeros[5]"}</Text>
        <Text>{"numeros[5] = numeros[4]"}</Text>
        <Text>{"numeros[4] = numeros[3]"}</Text>
        <Text>{"numeros[3] = numeros[2]"}</Text>
        <Text>{"numeros[2] = numeros[1]"}</Text>
        <Text>{"numeros[1] = numeros[0]"}</Text>
        <Text>{"numeros[0] = ultimo"}</Text>

        <Text>{"export const resposta07 = false"}</Text>

    </View>

    <View style={{display: "flex", flexDirection: "column", left: 100}}>
        
        <Text> </Text>
        <Text> </Text>

        <Text>
            Uma questão que ajudou a entender muita coisa:
        </Text>

        <Text>{"export let umaFuncao = function (lamb){"}</Text>
        <Text>{"}"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que não ajudou a entender nada:
        </Text>

        <Text>{"function contarPalavrasTravaLingua(aa){"}</Text>
        <Text>{"  let v = travaLinguas[aa].split(' ').length"}</Text>
        <Text>{"  return v"}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta07 = contarPalavrasTravaLingua"}</Text>

    </View>

</View>

    const codigoRayane = 
<View style={{display: "flex", flexDirection: "row"}}>

    <View style={{display: "flex", flexDirection: "column"}}>
        <Text>
            Sobre os Códigos
        </Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito fácil:
        </Text>

        <Text>{"profissoes.pop()"}</Text>
        <Text>{"export const resposta02 = lista"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito difícil:
        </Text>

        <Text>{"let yuta = 0"}</Text>
        <Text>{"let rika = 0"}</Text>
        <Text>{"while (rika <= 100) {"}</Text>
        <Text>{"  if(rika % 7 ==  0){"}</Text>
        <Text>{"    yuta = yuta + rika"}</Text>
        <Text>{"  }"}</Text>
        <Text>{"  rika++"}</Text>
        <Text>{"  console.log(yuta)"}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta04 = yuta"}</Text>

    </View>

    <View style={{display: "flex", flexDirection: "column", left: 100}}>
        
        <Text> </Text>
        <Text> </Text>

        <Text>
            Uma questão que ajudou:
        </Text>

        <Text>{"export const resposta04 = 70 < 80"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que não mudou nada:
        </Text>

        <Text>{"function nomeCompleto(primeiroNome, sobrenome){"}</Text>
        <Text>{"  return primeiroNome + \" \" + sobrenome"}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta04 = nomeCompleto"}</Text>

        <Text> </Text>

        

    </View>

</View>
    
       const codigoPablo = 
<View style={{display: "flex", flexDirection: "row"}}>

    <View style={{display: "flex", flexDirection: "column"}}>
        <Text>
            Sobre os códigos
        </Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito fácil:
        </Text>

        <Text>{"animais.reverse()"}</Text>
        <Text>{"export const resposta09 = animais"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito difícil:
        </Text>

        <Text>{"let cima = 0"}</Text>
        <Text>{"let baixo = 0"}</Text>
        <Text>{"let media = 0"}</Text>
        <Text>{"for(let c = 1; c <= 200; c++){"}</Text>
        <Text>{"  if(c % 3 === 0){"}</Text>
        <Text>{"    cima += c"}</Text>
        <Text>{"    baixo++"}</Text>
        <Text>{"  }"}</Text>
        <Text>{"}"}</Text>

        <Text>{"media = cima/baixo"}</Text>
        <Text>{"//console.log(media)"}</Text>

        <Text>{"export const resposta04 = media"}</Text>

    </View>

    <View style={{display: "flex", flexDirection: "column", left: 100}}>

        <Text> </Text>
        <Text> </Text>

        <Text>
            Uma questão que ajudou a entender:
        </Text>

        <Text>{"export const trintaENove = 44 - 10 + 5"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que não ajudou a entender nada:
        </Text>

        <Text>{"function listarNomesElementos(elementos){"}</Text>
        <Text>{"  let kaiser = []"}</Text>
        <Text>{"  for(let ness = 0; ness < elementos.length; ness++){"}</Text>
        <Text>{"    kaiser.push(elementos[ness].nome)"}</Text>
        <Text>{"  }"}</Text>
        <Text>{"  return kaiser"}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta11 = listarNomesElementos"}</Text>

    </View>

</View>
    
   const codigoCauã = 
<View style={{display: "flex", flexDirection: "row"}}>

    <View style={{display: "flex", flexDirection: "column"}}>
        <Text>
            Sobre os códigos
        </Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito fácil:
        </Text>

        <Text>{"frutas[3] = \"abacaxi\""}</Text>
        <Text>{"export const resposta03 = frutas"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que achou muito difícil:
        </Text>

        <Text>{"let cima = 0"}</Text>
        <Text>{"let baixo = 0"}</Text>
        <Text>{"let media = 0"}</Text>
        <Text>{"for(let c = 1; c <= 200; c++){"}</Text>
        <Text>{"  if(c % 3 === 0){"}</Text>
        <Text>{"    cima += c"}</Text>
        <Text>{"    baixo++"}</Text>
        <Text>{"  }"}</Text>
        <Text>{"}"}</Text>

        <Text>{"media = cima/baixo"}</Text>
        <Text>{"//console.log(media)"}</Text>

        <Text>{"export const resposta04 = media"}</Text>

    </View>

    <View style={{display: "flex", flexDirection: "column", left: 100}}>

        <Text> </Text>
        <Text> </Text>

        <Text>
            Uma questão que ajudou:
        </Text>

        <Text>{"export const resposta01 = 14 / 2 > 3"}</Text>

        <Text> </Text>

        <Text>
            Uma questão que não ajudou:
        </Text>

        <Text>{"function saudacao(){"}</Text>
        <Text>{"  return \"Bom dia!\""}</Text>
        <Text>{"}"}</Text>

        <Text>{"export const resposta01 = saudacao"}</Text>

    </View>

</View>
    
    

    const [alunoSelecionado, setAlunoSelecionado] = useState("Everton")
    const [codigo, setCodigo] = useState(codigoEverton)

    return(
        <View style={{
            display: "flex", 
            flexDirection: "row", 
            width: "100vw",
            justifyContent: "flex-start",
            padding: "20px",
            gap: "30px",
        }}>
            <Menu
                alunoSelecionado={alunoSelecionado}
                setAluno={setAlunoSelecionado}
                setCodigo={setCodigo}
                codigoEverton={codigoEverton}
                codigoHelena={codigoHelena}
                codigoRayane={codigoRayane}
                codigoPablo={codigoPablo}
                codigoCauã={codigoCauã}
            ></Menu>
            <View style={{
                maxWidth: "80vw",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
                <Text style={{color: "white"}}>
                    Códigos de {alunoSelecionado}:
                    {codigo}
                </Text>

            </View>
            
        </View>
    )
}