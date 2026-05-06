import { Pressable, Text } from 'react-native'

export default function Botao({alunoSelecionado, aluno, setAluno, setCodigo, codigo, estilos}) {
  return (
    <Pressable
      style={[
        estilos.botaoMenu,
        {
          backgroundColor: alunoSelecionado === aluno ? "#246" : "#111"
        }
      ]}
      onPress={() => {
        setAluno(aluno)
        setCodigo(codigo)
      }}
    >
      <Text style={{ color: "#fff" }}>
        {aluno}
      </Text>
    </Pressable>
  )
}