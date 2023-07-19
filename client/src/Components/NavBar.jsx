import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Nav.css"

const  NavBar=()=>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i className="fas fa-code me-2"></i>MONPAIN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#my-nav"
            aria-controls="my-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="my-nav" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  <i className="fas fa-sign-in-alt me-1"></i>Connexion
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/registre" className="nav-link">
                  <i className="fas fa-user-plus me-1"></i>S'inscrire
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar