import React from "react";
import {Link} from "react-router-dom";
import "./index.css"

const Nav =() => {
    return (
        <div>
            <div className="classroom"><img className="classroom-img" src="https://cdn-icons-png.flaticon.com/512/2422/2422454.png" alt="교실사진"></img>ClassRoom(강의실)</div>
        <br/>
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