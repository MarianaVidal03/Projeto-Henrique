import React from "react";

import { Link } from "react-router-dom";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionImages from "./index-sections/SectionImages";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SectionImages: [
        {
          img: "https://i.pinimg.com/564x/31/83/87/31838708c53f75c73fa2b7b358bccbb1.jpg",
          name: "Cozinha",
          description: "Saiba mais sobre nossos Utensílios de cozinha",

        },
        {
          img: "https://imagens-revista.vivadecora.com.br/uploads/2018/12/decora%C3%A7%C3%A3o-de-sacada-com-poltronas-de-madeira-e-mesa-de-centro-azul-Foto-Galeria-da-Arquitetura.jpg",
          name: "Decoração",
          description: "Conheça mais sobre nossos produtos de Decoração para casa"
        },
        {
          img: "https://s2.glbimg.com/R85-jeBx3F94dNWUTSqMN_7488A=/e.glbimg.com/og/ed/f/original/2017/08/08/12313151875_04c83230a2_k.jpg",
          name: "Livros",
          description: "Saiba mais sobre nossos livros"
        },
      ]
    };
  }
  render() {
    return (
      <div>
        <IndexNavbar />
        <IndexHeader />
        <div className="main">
          <SectionImages itens={this.state.SectionImages} />
          <DemoFooter />
        </div>
      </div>
    );
  }
}
