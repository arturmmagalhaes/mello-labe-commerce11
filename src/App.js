import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter/Filter";
import Carrinho from "./components/Carrinho/Carrinho";
import GridProdutos from "./components/GridProdutos/GridProdutos";

const produtos = [
  {
    id: 1,
    nome: "produto 1",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=1",
  },
  {
    id: 2,
    nome: "produto 2",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=2",
  },
  {
    id: 3,
    nome: "produto 3",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=3",
  },
  {
    id: 4,
    nome: "produto 4",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=4",
  },
  {
    id: 5,
    nome: "produto 5",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=5",
  },
  {
    id: 6,
    nome: "produto 6",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=6",
  },
  {
    id: 7,
    nome: "produto 7",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=7",
  },
  {
    id: 8,
    nome: "produto 8",
    valor: 10,
    imgUrl: "https://picsum.photos/200/200?a=8",
  },
];

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 80vh;
`;

class App extends React.Component {
  state = {
    produtos: produtos,
  };

  render() {
    return (
    <MainContainer>
      <Filter></Filter>
      <GridProdutos listaProdutos={this.state.produtos}></GridProdutos>
      <Carrinho></Carrinho>
    </MainContainer>
    )
  }
}

export default App;
