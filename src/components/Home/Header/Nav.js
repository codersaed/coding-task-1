import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f5f6fa' }}>
            <div className="container py-2">
                <Link className="navbar-brand text-white font-weight-bold text-dark" to="/">Coding Task</Link>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-4 font-weight-bold text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-warning font-weight-bold mr-3" to="/previewImage">Preview Image</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-warning font-weight-bold" to="/shirt">T-Shirt Design</Link>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
    );
};

export default Nav;