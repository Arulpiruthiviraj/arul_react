import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
    return (
        <div>
            <Link style={{ marginRight: "5px" }} to="/" className="btn btn-secondary">
                Home
            </Link>
            <Link
                style={{ marginRight: "5px" }}
                to="/component1"
                className="btn btn-secondary"
            >
                Component 1
            </Link>
            <Link
                style={{ marginRight: "5px" }}
                to="/component2"
                className="btn btn-secondary"
            >
                Component 2
            </Link>
        </div>
    );
};

export default Menu;
