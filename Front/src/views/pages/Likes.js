import React from "react";

import { Link } from "react-router-dom";
// core components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Container, Row, Col, Button, Card, CardBody, CardHeader, CardFooter } from "reactstrap";

export default class Index extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h1 className="text-center">Relatório de Curtidas</h1>
                <Col className="mt-4 ">
                    <table class="table table-dark">
                        <thead>
                            <tr>

                                <th scope="col">Past Collection</th>
                                <th scope="col">Current Collection</th>
                                <th scope="col">New Collection</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>4 Curtidas</td>
                                <td>3 Curtidas</td>
                                <td>5 Curtidas</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

            </div>
        );
    }
}
