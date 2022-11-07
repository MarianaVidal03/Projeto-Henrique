import React from "react";

import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";

export default class SectionTableBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Col lg='12' className="mt-4">
                <table class="table table-bordered table-dark mx-auto shadow-sm mb-3" style={{ minWidth: '1100px', maxWidth: '1100px' }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Imagem</th>
                            <th>ISBN</th>
                            <th>Tipo de Capa</th>
                            <th>Dimensão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rend}
                    </tbody>
                </table>
            </Col>
        );
    }
}
