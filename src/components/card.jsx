import React, { useState } from 'react'
import Menu from './Menu'

function Card() {

  const codigoAlisson = <p>Código do Alisson</p>
  const codigoWilly = <p>Código do Willy</p>
  const codigoDani = <p>Código do Dani</p>
  const codigoAbraao = <p>Código do Abraão</p>

  const [alunoSelecionado, setAlunoSelecionado] = useState("Alisson")
  const [codigo, setCodigo] = useState(codigoAlisson)

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: 20 }}>
      
      <Menu
        alunoSelecionado={alunoSelecionado}
        setAluno={setAlunoSelecionado}
        setCodigo={setCodigo}
        codigoAlisson={codigoAlisson}
        codigoWilly={codigoWilly}
        codigoDani={codigoDani}
        codigoAbraao={codigoAbraao}
      />

      <div style={{ marginLeft: 20 }}>
        <p style={{ color: "#fff" }}>
          Códigos de {alunoSelecionado}:
        </p>
        {codigo}
      </div>

    </div>
  )
}

export default Card