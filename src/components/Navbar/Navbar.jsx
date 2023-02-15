import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar(){

    return <div className="navbar-bg">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to={'/'}>Home</Link></li>
                            <li className="nav-item">
                            <Link className="nav-link" to={'/New-Releases'}>New Releases</Link></li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to='/action'>Action</Link></li>
                                <li><Link className="dropdown-item" to={'/Bollywood'}>Bollywood</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link disabled">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">
                            Search
                            </button>
                        </form>
                        </div>
                    </div>
                    </nav>


        
    </div>

    
}
export default Navbar;