import React from 'react';

function Product({ book }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={book.image} className="img-fluid rounded-start" alt={book.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.description}</p>
            <p className="card-text">
              <small className="text-muted">Author: {book.author}</small>
            </p>
            <p className="card-text">
              <strong>Price: ${book.price}</strong>
            </p>
            <a href="#" className="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
