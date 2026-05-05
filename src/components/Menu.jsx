import { useState } from 'react';
import { View, Text } from 'react-native';

export default function Menu() {
    const [aluno, setAluno] = useState("Alice", "Beatriz", "Maria Luisa", "Maria Eloiza", "Gabriel");
    const codigosAlunos = {
        alice: "console.log('codigo de alice')",
        beatriz: "console.log('codigo de beatriz')",
        luisa: "console.log('codigo de luisa')",
        eloiza: "console.log('codigo de eloiza')",
        gabriel: "console.log('codigo de gabriel')"
    }

    return (
        <View>

        </View>
    )
}