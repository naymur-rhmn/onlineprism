import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="col-lg-2">
                        {/* logo */}
                        <div className="logo shadow ">Onlineprism</div>
                    </div>
                    <div className="col-lg-6 offset-2">
                        {/* home */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/home">Home</NavLink>
                        {/* services */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/services">Services</NavLink>
                        {/* about */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/about">About</NavLink>
                        {/* blog */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/blog">Blog</NavLink>
                        {/* contact */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/contact">Contact</NavLink>

                        {/* faq */}
                        <NavLink className="nav-link" activeStyle={{
                            fontWeight: "bold",
                            color: "#F1CA2E"
                        }} to="/faq">FAQ</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;