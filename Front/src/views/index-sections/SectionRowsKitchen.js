import React from "react";

import { Link } from "react-router-dom";

export default class SectionRowsKitchen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <tr>

                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.description}</td>
                <td>{this.props.image}</td>
                <td>{this.props.model}</td>
                <td>{this.props.dimension}</td>
                <td>{this.props.volume}</td>
                <td>{this.props.amount}</td>
                <td>
                    <button className="btn btn-secondary" onClick={this.props.click1}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-secondary ml-2" onClick={this.props.click2}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

        )
    }
}
