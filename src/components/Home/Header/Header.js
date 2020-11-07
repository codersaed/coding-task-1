import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../../image/bg.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-md-6 justify-content-center align-self-center">
                    <h2>Coding Task</h2>
                    <p className="py-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button style={{ border: 'none', padding: '0' }}>
                        <Link className="btn btn-warning font-weight-bold mr-3" to="/previewImage">Preview Image</Link>
                    </button>
                    <button style={{ border: 'none', padding: '0' }}>
                        <Link className="btn btn-warning font-weight-bold" to="/shirt">T-Shirt Design</Link>
                    </button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={bgImage} alt="company" />
                </div>
            </div>
        </div>
    );
};

export default Header;