import React from 'react';
import Nav from '../Home/Header/Nav';
import shirt from '../../image/shirt.png'



const ShirtDesign = () => {

    const handleLeft = () => {
        alert("left drag and drop")
    }
    
    
    const handleRight = () => {
        alert("right drag and drop ")
    }

    return (
        <div>
            <Nav />

            <div className="container py-4">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-dark text-white font-weight-bold" onClick={handleLeft}>Left</button>
                    <button className="btn btn-dark text-white font-weight-bold" onClick={handleRight}>Right</button>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="img-fluid" style={{ height: '400px' }} src={shirt} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShirtDesign;