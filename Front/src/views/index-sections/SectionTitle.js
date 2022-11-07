import React from "react";

import { Link } from "react-router-dom";
import SectionCarousel from "./SectionCarousel";
import {
    Nav,
    Container,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
} from "reactstrap";

export default class SectionTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exemplo: [
                {
                    src: require("assets/img/soroush-karimi.jpg"),
                    altText: "Somewhere",
                    caption: "Somewhere",
                },
                {
                    src: require("assets/img/federico-beccari.jpg"),
                    altText: "Somewhere else",
                    caption: "Somewhere else",
                },
                {
                    src: require("assets/img/joshua-stannard.jpg"),
                    altText: "Here it is",
                    caption: "Here it is",
                },
            ]
        };
    }
    render() {
        return (
            <div>
                <Container style={{ backgroundColor: "black", color: "white" }} className="tim-container">
                    <div id="typography">

                        <div className=" text-center">
                            <h1>
                                {this.props.title}
                            </h1>
                        </div>
                    </div>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle
                                aria-expanded={false}
                                aria-haspopup={true}
                                caret
                                color="default"
                                data-toggle="dropdown"
                                href="#pablo"
                                id="dropdownMenuButton"
                                nav
                                onClick={(e) => e.preventDefault()}
                                role="button"
                            >
                                <span style={{ color: "white" }}>PRODUTOS</span>
                            </DropdownToggle>
                            <DropdownMenu
                                aria-labelledby="dropdownMenuButton"
                                className="dropdown-info"
                            >
                                <DropdownItem
                                    href="index"
                                >
                                    Inicio
                        </DropdownItem>
                                <DropdownItem
                                    href="roupa"
                                >
                                    Roupa
                        </DropdownItem>
                                <DropdownItem
                                    href="cozinha"
                                >
                                    Cozinha
                        </DropdownItem>
                                <DropdownItem
                                    href="casa"
                                >
                                    Casa
                        </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem
                                    href="livro"
                                >
                                    Livros
                        </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Container>
            </div>
        );
    }
}
