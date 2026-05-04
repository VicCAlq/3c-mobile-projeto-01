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



    const codigoLaura = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
    </View>

    const codigoGustavo = <View>
        <Text>
            Códigos de Thais aqui
        </Text>
        <Text>
            oiiiii
        </Text>
    </View>
    
       const codigoFernanda = <View>
        <Text>
            Códigos de Thais aqui
        </Text>

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