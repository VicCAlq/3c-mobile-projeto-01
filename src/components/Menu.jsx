import { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Pressable, Text, Image } from 'react-native'
import Botao from './Botao';

const alunos = [
    { nome: "Aluno 1", img: require("../assets/1.png") },
    { nome: "Aluno 2", img: require("../assets/1.png") },
    { nome: "Aluno 3", img: require("../assets/1.png") },
  ];
  
  export default function Menu() {
    return (
      <View>
        {alunos.map((aluno, index) => (
          <Botao
            key={index}
            img={aluno.img}
            texto={aluno.nome}
            onPress={() => alert(aluno.nome)}
          />
        ))}
      </View>
    );
  }

