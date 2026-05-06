import { useState } from 'react';
import { View, Text } from 'react-native';
import Botao from './Botao';

export default function Menu({setAluno}) {
    const imagemAlice = require("../../assets/alice.png")
    const imagemBeatriz = require("../../assets/beatriz.png")
    const imagemEloiza = require("../../assets/eloiza.png")
    const imagemGabriel = require("../../assets/splash-icon.png")
    const imagemLuisa = require("../../assets/luisa.png")

    return (
        <View style={{
            backgroundColor: "#EFE9AE",
            borderRadius: "15px",
            margin: "10px",
            padding: "10px",
        }}>
            <Botao aluno={"alice"} setAluno={setAluno} imagem={imagemAlice}/>
            <Botao aluno={"beatriz"} setAluno={setAluno} imagem={imagemBeatriz}/>
            <Botao aluno={"eloiza"} setAluno={setAluno} imagem={imagemEloiza}/>
            <Botao aluno={"gabriel"} setAluno={setAluno} imagem={imagemGabriel}/>
            <Botao aluno={"luisa"} setAluno={setAluno} imagem={imagemLuisa}/>
        </View>
    )
}