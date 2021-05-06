import React from 'react';
// import { Link } from 'react-router-dom';

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center">
            {/* <Link to="/"> */}
            <button
              className="btn btn-outline-danger text-uppercase text-center mb-3 px-4"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            {/* </Link> */}
            <h5 className="text-right mr-4">
              <span>subtotal: </span>
              <strong>€{cartSubtotal}</strong>
            </h5>
            <h5 className="text-right mr-4">
              <span>tax: </span>
              <strong>€{cartTax}</strong>
            </h5>
            <h5 className="text-right mr-4">
              <span>total: </span>
              <strong>€{cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
