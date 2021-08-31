import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

const Nav=() => {
    return (
        <div>
        <ul>
            <div>
            <li>
                <Link to ="/">교실형태1</Link>
            </li>
            </div>
            <div>
            <li>
                <Link to ="/img1">교실형태2</Link>
            </li>
            </div>
            <div>
            <li>
                <Link to ="/img2">독서실형_교실</Link>
            </li></div>
            <div>
            <li>
                <Link to ="/img3">휴식공간</Link>
            </li></div>
            <div>
            <li>
                <Link to ="/img4">복도공간</Link>
            </li></div>
        </ul>
        </div>
    );
};

export default Nav;