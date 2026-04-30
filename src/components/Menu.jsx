import { View, Text, StyleSheet, Pressable  } from 'react-native'
import { useState } from 'react'


const EstilosMenu = StyleSheet.create({
  menu: {
    backgroundColor: "#222",
    padding: 20,
    margin: 20,
    borderRadius: 10
  },
  titulo: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10
  },
    botaoMenu: {
    backgroundColor: "#111",
    color: "#ddd",
    border: "2px solid #48a",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
  },
  botaoMenuSelecionado: {
    backgroundColor: "#246",
  }
})

export default function Menu({
  Thais, Laura, mudarPagina
}) {
    const [selecionado, setSelecionado] = useState("Nada")

    return (
        <view style={EstilosMenu.menu}>
            <Pressable
            style={() => [EstilosMenu.menu,
                {
                    backgroundColor: selecionado === "Thais" ?
                         "#246" :
                         "#111"
                }
            ]}
            onPress={() => {
                mudarPagina(Thais)
                setselecionado("Thais")
            }}
        >
            thais
        </Pressable>
            <Pressable
            style={() => [EstilosMenu.menu,
                {
                    backgroundColor: selecionado === "Laura" ?
                         "#246" :
                         "#111"
                }
            ]}
            onPress={() => {
                mudarPagina(Laura)
                setselecionado("Laura")
            }}
            >
                Laura
            </Pressable>
        </view>
    )
}

