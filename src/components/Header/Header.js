import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt="" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Order Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Manage Inventory Here</a>
                            </li>



                        </ul>
                        <form className="d-flex flex-fill ">
                            <input className="form-control me-2 " type="search" placeholder="Search Product" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;