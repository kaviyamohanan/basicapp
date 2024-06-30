import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-white mt-4" style={{ backgroundColor: '#607D8B' }}>
      {/* Call to action */}
      <div className="pt-4 pb-2">
        <a className="btn btn-outline-white footer-cta mx-2" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" rel="noopener noreferrer" role="button">
          Download MDB <i className="fas fa-download ms-2"></i>
        </a>
        <a className="btn btn-outline-white footer-cta mx-2" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" rel="noopener noreferrer" role="button">
          Start free tutorial <i className="fas fa-graduation-cap ms-2"></i>
        </a>
      </div>
      {/* /.Call to action */}

      <hr className="text-dark" />

      <div className="container">
        {/* Section: Social media */}
        <section className="mb-3">

          {/* Facebook */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-twitter"></i>
          </a>

          {/* Google */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-google"></i>
          </a>

          {/* Instagram */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-instagram"></i>
          </a>

          {/* YouTube */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-youtube"></i>
          </a>

          {/* Github */}
          <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark">
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: '#E0E0E0' }}>
        © 2022 Copyright: <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
