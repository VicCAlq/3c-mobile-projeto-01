import { Text, View } from 'react-native';
import { useState } from 'react';
import Menu from './Menu';
import Card from './Card';

export default function Principal() {
    const [aluno,setAluno] = useState(null)

    return (<View>
        <Text style={{color: "white"}}>
            Conteúdo principal futuramente aqui
        </Text>
        <Menu setAluno={setAluno} />
        <Card aluno={aluno}/>
    </View>)
}