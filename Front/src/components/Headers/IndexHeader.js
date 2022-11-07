
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">ROUPAS</h1>
              <div className="fog-low">

              </div>
              <div className="fog-low right">

              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Conheça mais sobre nossa linha de roupas!
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
