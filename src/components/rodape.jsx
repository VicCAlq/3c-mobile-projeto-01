import React from 'react'

const estilos = {
  rodape: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "#1e1e2f",
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    color: "#fff",
    margin: 0
  },
  link: {
    color: "#6c63ff",
    textDecoration: "none"
  }
}

function Rodape() {
  return (
    <div style={estilos.rodape}>
      <p style={estilos.texto}>
        feito por Alisson, Willy, Dani e Abraão
      </p>

      <a
        href="https://github.com/VicCAlq/3c-mobile-projeto-01/tree/Alisson-Abraao-Daniela-Williane"
        target="_blank"
        rel="noopener noreferrer"
        style={estilos.link}
      >
        GitHub
      </a>
    </div>
  )
}

export default Rodape