import { View, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    rodape:{
        padding: "10px",
        backgroundColor: "red",
    }
})

export default function Rodape() {
  return (
    <View style = {styles.rodape}>
        <Text> Criado por: </Text>
    </View>
  );
}