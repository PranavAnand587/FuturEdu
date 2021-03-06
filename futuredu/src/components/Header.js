import React from "react"
import { Link } from "react-router-dom";

import "../style/header.css";

import Logo from "../assets/logo.png";

function Header(props){

    let color = "white";
    let pos = "absolute";
    if (props.Color === "black") {
        color = "black"
        pos="relative"
    }

    return (
        <div className="navbar-wrapper" style={{position:pos}}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/"><img id="logo" src={Logo} href="/" alt="Logo"/></Link>
            <a className="navbar-toggler" type="a" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i class="fas fa-bars" style={{color:color, fontSize:"28px"}}></i>
                </span>
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/"><Link to="/">Home</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/etech"><Link to="/etech">Future Tech</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="prereqs"><Link to="/prereqs">Prerequisites</Link></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="skills"><Link to="/skills">Skills</Link></a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    )
}
export default Header;
