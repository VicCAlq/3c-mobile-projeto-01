import React from 'react'
import Botao from './Botao'

const estilosMenu = {
  menu: {
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
    width: 200,
  },
  botaoMenu: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 10,
    margin: 10,
  }
}

function Menu({
  alunoSelecionado, 
  setAluno, 
  setCodigo, 
  codigoAlisson, 
  codigoWilly, 
  codigoDani, 
  codigoAbraao
}) {
  return (
    <div style={estilosMenu.menu}>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Alisson" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoAlisson} estilos={estilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Willy" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoWilly} estilos={estilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Dani" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoDani} estilos={estilosMenu}/>
      <Botao alunoSelecionado={alunoSelecionado} aluno="Abraão" setAluno={setAluno} setCodigo={setCodigo} codigo={codigoAbraao} estilos={estilosMenu}/>
    </div>
  )
}

export default Menu