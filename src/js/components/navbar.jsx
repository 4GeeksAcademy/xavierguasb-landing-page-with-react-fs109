import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav " aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav justify-content-end  collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <a className="nav-link text-light" href="#"><strong>Home</strong></a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">About de</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-white-50" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;