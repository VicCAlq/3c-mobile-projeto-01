import React, { useState } from 'react'

const estilosCabecalho = {
  cabecalho: {
    backgroundColor: "#333",
    height: 70,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    border: "none",
    cursor: "pointer",
    color: "#fff"
  }
}

function Cabecalho({ paginaPrincipal, sobreEquipe, mudarPagina }) {
  const [selecionado, setSelecionado] = useState("principal")

  return (
    <div style={estilosCabecalho.cabecalho}>
      <button
        style={{
          ...estilosCabecalho.botao,
          backgroundColor: selecionado === "principal" ? "#246" : "#111"
        }}
        onClick={() => {
          mudarPagina(paginaPrincipal)
          setSelecionado("principal")
        }}
      >
        Página principal
      </button>

      <button
        style={{
          ...estilosCabecalho.botao,
          backgroundColor: selecionado === "sobreEquipe" ? "#246" : "#111"
        }}
        onClick={() => {
          mudarPagina(sobreEquipe)
          setSelecionado("sobreEquipe")
        }}
      >
        Sobre a Equipe
      </button>
    </div>
  )
}

export default Cabecalho