import React from "react";

import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";

export default class SectionFormHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        };
        this.onImageChange = this.onImageChange.bind(this);
    }
    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
    };
    render() {
        return (
            <div>
                <Col lg='12' className="mt-4">
                    <Card className='mx-auto shadow-sm mb-3 border mt-4' style={{ minWidth: '800px', maxWidth: '800px', minHeight: "500px" }}>
                        <CardHeader style={{ backgroundColor: "#6a6a6a", color: "white" }} className="border-bottom">
                            <h6 className="m-0 text-center">{this.props.title1}</h6>
                        </CardHeader>
                        <CardBody style={{ backgroundColor: "#373737" }}>
                            <Row>
                                <Col md="6">
                                    <label style={{ color: "white" }} htmlFor="name">Nome</label>
                                    <input type="text" className="form-control mb-4"
                                        name="name"
                                        value={this.props.value1}
                                        onChange={this.props.onchange}
                                        placeholder="Digite o nome"
                                    />
                                </Col>
                                <Col md="6">
                                    <label style={{ color: "white" }} htmlFor="price">Preço</label>
                                    <input type="double" className="form-control mb-4"
                                        name="price"
                                        value={this.props.value2}
                                        onChange={this.props.onchange}
                                        placeholder="Digite o preço"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <label style={{ color: "white" }} htmlFor="description">Descrição</label>
                                    <input type="text" className="form-control mb-4"
                                        name="description"
                                        value={this.props.value3}
                                        onChange={this.props.onchange}
                                        placeholder="Digite a descrição"
                                    />
                                </Col>
                                <Col md="6">
                                    <label style={{ color: "white" }} htmlFor="">Modelo</label>
                                    <input type="text" className="form-control mb-4"
                                        name="model"
                                        value={this.props.value4}
                                        onChange={this.props.onchange}
                                        placeholder="Digite o modelo"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <label style={{ color: "white" }} htmlFor="model">Dimensão</label>
                                    <input type="" className="form-control mb-4"
                                        name="dimension"
                                        value={this.props.value5}
                                        onChange={this.props.onchange}
                                        placeholder="Digite a dimensão"
                                    />
                                </Col>

                            </Row>
                            <Row>
                                <Col md="12">
                                    <img src={this.state.image} />
                                    <label style={{ color: "white" }} htmlFor="image">Imagem</label>

                                    <input type="file" class="form-control" placeholder="Coloque a Imagem" onChange={this.onImageChange} value={this.props.value6} name="image" rows="3"></input>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter style={{ backgroundColor: "#6a6a6a", color: "white" }}>
                            <div className="row">
                                <div className="col-12 d-flex justify-content end">
                                    <button className="btn btn-secondary"
                                        onClick={this.props.salvar}>Salvar</button>
                                    <button className="btn btn-secondary ml-2"
                                        onClick={this.props.cancelar}>Cancelar</button>
                                </div>
                            </div>
                        </CardFooter>
                    </Card>
                </Col>
            </div>
        )
    }
}
