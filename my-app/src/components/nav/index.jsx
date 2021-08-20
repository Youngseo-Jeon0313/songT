import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

const Nav=() => {
    return (
        <ul>
            <li>
                <Link to ="/">학원1</Link>
            </li>
            <li>
                <Link to ="/img1">학원2</Link>
            </li>
            <li>
                <Link to ="/img2">학원3</Link>
            </li>
            <li>
                <Link to ="/img3">학원4</Link>
            </li>
            <li>
                <Link to ="/img4">학원5</Link>
            </li>
        </ul>
    );
};

export default Nav;