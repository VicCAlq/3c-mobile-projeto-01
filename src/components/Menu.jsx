import { View, StyleSheet, Image } from 'react-native'
import Botao from './Botao'

export default function Menu({ setAlunoSelecionado }) {
  return (

    
    <View style={styles.botaoEstrutura}>
      
      <View>
      <Image source={require('../../assets/renan.png')} style={styles.foto}/>
      <Botao nome="Renan" setAluno={setAlunoSelecionado} />
      </View>
      <View>
          <Image source={require('../../assets/manuella.png')} style={styles.foto}/>
        <Botao nome="Manuella" setAluno={setAlunoSelecionado} /></View>
      <View> 
         <Image source={require('../../assets/lucas.png')} style={styles.foto}/>
        <Botao nome="Renato" setAluno={setAlunoSelecionado} /></View>
      <View>
        <Image source={require('../../assets/guilherme.png')} style={styles.foto}/>
         
        <Botao nome="Guilherme" setAluno={setAlunoSelecionado} /></View>
      <View>
        <Image source={require('../../assets/chris.png')} style={styles.foto}/>
        <Botao nome="Izabella" setAluno={setAlunoSelecionado} /></View>
      
      
        
         
    </View>
  )
}

const styles = StyleSheet.create({
  botaoEstrutura: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 5,
    margin: 5

  },
});