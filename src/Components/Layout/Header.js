import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <Link className="navbar-brand mt-2 mt-sm-0" to="/">
            <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="20" alt="MDB Logo" loading="lazy" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link className="nav-link me-3" to="#">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </Link>
          <Link className="nav-link me-3" to="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className="nav-link me-3" to="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="nav-link me-3" to="https://github.com/mdbootstrap/bootstrap-material-design" target="_blank">
            <i className="fab fa-github me-2"></i>MDB GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
