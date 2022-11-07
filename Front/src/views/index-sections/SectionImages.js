import React from "react";

import { Link } from "react-router-dom";

export default class SectionImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {this.props.itens &&
                    this.props.itens.map((item, key) => {
                        return (
                            <div
                                
                                className="page-header section-dark"
                                style={{
                                backgroundImage:  "url(" + (item.img) + ")"                                }}
                            >
                                <div className="filter" />
                                <div className="content-center">

                                    <div  className="title-brand">
                                        <h1  className="presentation-title">{item.name}</h1>
                                        <div className="fog-low">

                                        </div>
                                        <div className="fog-low right">

                                        </div>
                                    </div>
                                    <h2 className="presentation-subtitle text-center">
                                        {item.description}
                                    </h2>

                                </div>
                            </div>);
                    })}
            </div>
        );
    }
}
