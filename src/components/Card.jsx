import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react'
import Menu from './Menu'
import Botao from './Botao'

export default function Card() {


    const codigoThais = 
    <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
            <Text>
                Sobre a Lista de Laços 
            </Text>
            <Text>   </Text>
            <Text>
                Uma questão que achou muito fácil: Foi a questão 4 da primira lista de exercicios
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
                Uma questão que achou muito difícil: Foi a questão 10 da segunda lista de exercicios
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


//////////////


    const codigoLaura =  <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
            <Text>
                Sobre a Lista de Função
            </Text>
            <Text>   </Text>
            <Text>
                Uma questão que achou muito fácil: Foi a questão 1
            </Text>
    <Text>{"function saudacao(){"}</Text>
    <Text>{"  return \"Bom dia!\""}</Text>
    <Text>{"}"}</Text>
    <Text>{"export const resposta01 = saudacao"}</Text>
            <Text>       </Text>

            <Text>
                Uma questão que achou muito difícil: Foi a questão 3
            </Text>
    <Text>{"function ehPositivo(numero){"}</Text>
    <Text>{"  if(numero >= 0){"}</Text>
    <Text>{"    return true"}</Text>
    <Text>{"  }"}</Text>
    <Text>{"  if(numero < 0){"}</Text>
    <Text>{"    return false"}</Text>
    <Text>{"  }"}</Text>
    <Text>{"}"}</Text>
            <Text>     </Text>
        </View>
        <View style={{display: "flex", flexDirection: "column", left: 100, marginTop: "-3px" }}>
            <Text>  </Text>
            <Text>  </Text>
            <Text>
                Uma questão que o ajudou a entender muita coisa: Foi a questão 5
            </Text>
    <Text>{"function contarTravaLinguas(travaLinguas){"}</Text>
    <Text>{"  let quantidadeDeTrava"}</Text>
    <Text>{"  for(let i = 0; i < travaLinguas.length; i++){"}</Text>
    <Text>{"    quantidadeDeTrava = i + 1"}</Text>
    <Text>{"  }"}</Text>
    <Text>{"  return quantidadeDeTrava"}</Text>
    <Text>{"}"}</Text>
        <Text>   </Text>
        <Text>
            Uma questão que não ajudou a entender nada: Foi a questão 8 
        </Text>
    <Text>{"function contarElementos(elementos){"}</Text>
    <Text>{"  return elementos.length"}</Text>
    <Text>{"}"}</Text>
    <Text>{"export const resposta09 = contarElementos"}</Text>
    <Text>{"}"}</Text>

        </View>   
    </View>


/////////


    const codigoGustavo = <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
            <Text>
                Sobre a Lista de variaveis
            </Text>
            <Text>     </Text>
            <Text>
                Uma questão que achou muito fácil: Foi a questão 1 e 2 
            </Text>
    <Text>{"/* 01 */ export let meunome = 'Felizberto Adalberto'"}</Text>
    <Text>{"/* 02 */ export const gatoRajado = 'Kiki'"}</Text>
            <Text>       </Text>

            <Text>
                Uma questão que achou muito difícil: Foi a questão 11 e 12
            </Text>
    <Text>{"/* 11 */ export class OperacaoExplosiva { constructor () {} }"}</Text>
    <Text>{"/* 12 */ export class PersonagemFicticio { constructor() {} }"}</Text>
            <Text>     </Text>
        </View>
        <View style={{display: "flex", flexDirection: "column", left: 100, marginTop: "-3px" }}>
            <Text>  </Text>
            <Text>  </Text>
            <Text>
                Uma questão que o ajudou a entender muita coisa: Foi a questão 5 e 6 
            </Text>
    <Text>{"/* 05 */ export const conducao = 'Onibus\'"}</Text>
    <Text>{"/* 07 */ export let golpeDoGoku = 'Kamehameha'"}</Text>
        <Text>   </Text>
        <Text>
            Uma questão que não ajudou a entender nada: Foi a questão 8  e 9
        </Text>
    <Text>{"/* 08 */ export const tomEJerry = 'Tom e Jerry'"}</Text>
    <Text>{"/* 09 */ export const EhSobreIsso = 'E tá tudo bem'"}</Text>

        </View>   
    </View>
    

    /////////


       const codigoFernanda = <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
            <Text>
                Sobre a Lista de variaveis
            </Text>
            <Text>   </Text>
            <Text>
                Uma questão que achou muito fácil: Foi a questão 1 
            </Text>
    <Text>{"const numeros = [7, 2, 4, 9, 8, 6, 1]"}</Text>
    <Text>{"export const resposta06 = numeros[0] * numeros[numeros.length - 2]"}</Text>
            <Text>       </Text>

            <Text>
                Uma questão que achou muito difícil: Foi a questão 7
            </Text>
    <Text>{"let temp2 = numeros[numeros.length - 1]"}</Text>
    <Text>{"for (let i = numeros.length - 1; i > 0; i--) {"}</Text>
    <Text>{"  numeros[i] = numeros[i - 1]"}</Text>
    <Text>{"}"}</Text>
    <Text>{"numeros[0] = temp2"}</Text>
    <Text>{"export const resposta07 = numeros"}</Text>
                <Text>     </Text>
        </View>
        <View style={{display: "flex", flexDirection: "column", left: 100, marginTop: "-3px" }}>
            <Text>  </Text>
            <Text>  </Text>
            <Text>
                Uma questão que o ajudou a entender muita coisa: Foi a questão 5
            </Text>
    <Text>{"let temp = frutas[2]"}</Text>
    <Text>{"frutas[2] = frutas[5]"}</Text>
    <Text>{"frutas[5] = temp"}</Text>
    <Text>{"export const resposta05 = frutas"}</Text>
        <Text>   </Text>
        <Text>
            Uma questão que não ajudou a entender nada: Foi a questão 8  e 9
        </Text>
    <Text>{"let tempA = numeros[1]"}</Text>
    <Text>{"let tempB = numeros[3]"}</Text>
    <Text>{"let tempC = numeros[5]"}</Text>
    <Text>{""}</Text>
    <Text>{"numeros[3] = tempA"}</Text>
    <Text>{"numeros[5] = tempB"}</Text>
    <Text>{"numeros[1] = tempC"}</Text>

        </View>   

    </View>
    
    
    

    const [alunoSelecionado, setAlunoSelecionado] = useState("Thais")
    const [codigo, setCodigo] = useState(codigoThais)

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
                codigoThais={codigoThais}
                codigoLaura={codigoLaura}
                codigoGustavo={codigoGustavo}
                codigoFernanda={codigoFernanda}
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