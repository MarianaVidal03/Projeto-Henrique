import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";


export default class SectionImageNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 0,
            count2: 0
        };

    }
    render() {
        return (
            <div id="images">
                <Container className="d-flex itens-center-align ">
                    <Row >
                        <Col md="4" sm="6">
                            <h4 className="images-title">Past Collection</h4>
                            <img
                                alt="..."
                                className="img-rounded img-responsive"
                                src={this.props.img1}
                            />
                            {/*30px"
                                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/285224-coracao-simbolo-do-amor-e-dia-dos-namorados-icone-vermelho-liso-isolado-no-fundo-branco-ilustracaoial-vetor.jpg"
                                /></button> {this.state.count + 4} Curtidas
                            </div>*/}
                        </Col>

                        <Col className="mr-auto ml-auto mb-5" md="4" sm="3">
                            <h4 className="images-title text-center">Current Collection</h4>
                            <img
                                alt="..."
                                className="img-circle img-no-padding img-responsive"
                                src={this.props.img2}
                            />
                            {/* <div className="mt-3">
                                <button type="button" onClick={() => this.setState({ count1: this.state.count1 + 1 })} > <img
                                    alt="..."
                                    className="img-rounded img-responsive"
                                    width="30px"
                                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/285224-coracao-simbolo-do-amor-e-dia-dos-namorados-icone-vermelho-liso-isolado-no-fundo-branco-ilustracaoial-vetor.jpg"
                                /></button> {this.state.count1 + 3} Curtidas
                            </div> */}
                        </Col>
                        <Col className="mr-auto" md="4" sm="3">
                            <h4 className="images-title">New Collection</h4>
                            <img
                                alt="..."
                                className="img-thumbnail img-responsive"
                                src={this.props.img3}
                            />
                            {/*<div className="mt-3">
                                <button type="button" onClick={() => this.setState({ count2: this.state.count2 + 1 })} > <img
                                    alt="..."
                                    className="img-rounded img-responsive"
                                    width="30px"
                                    src="https://static.vecteezy.com/ti/vetor-gratis/p1/285224-coracao-simbolo-do-amor-e-dia-dos-namorados-icone-vermelho-liso-isolado-no-fundo-branco-ilustracaoial-vetor.jpg"
                                /></button> {this.state.count2 + 5} Curtidas
        </div>*/}
                        </Col>
                    </Row>


                </Container>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <Button  href="/Likes">
                                Exibir Relatório de curtidas
                            </Button>

                        </div>
                    </div>
                </div>



                {/*<div className="text-center">
                    <p className="text-center">Se interessou por alguma roupa e deseja entrar em contato? Clique no ícone!</p>
                    <Button
                        className="btn-round"
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=+5545991056036"

                    >
                        <img src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png" />
                    </Button>
                </div>
                */}
            </div>
        )
    }
}
