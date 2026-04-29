import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exemplo: {
    display: 'flex',
  },
  texto: {
    color: '#ddd',
    fontFamily: 'sans',
  },
  botaoExemplo: {
    backgroundColor: '#252730',
    color: '#cdd',
    borderRadius: '10px',
    border: '0px solid #252730',
    cursor: 'pointer',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    margin: '10px',
  },
  container: {
    flex: 1,
    backgroundColor: '#151517',
    alignItems: 'center',
    justifyContent: 'center',
  },
});