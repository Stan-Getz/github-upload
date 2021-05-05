import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            companyLogo,
            companyName,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-3">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product infor */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-2">
                  <h2>Model: {title}</h2>
                  <h4 className="text-muted mt-3 mb-2">
                    Made by:
                    <img
                      src={companyLogo}
                      className="img-company mb-2 mx-2"
                      alt={companyName}
                      title={companyName}
                    />
                  </h4>
                  <h4 className="text-blue text-capitalize">
                    <strong>
                      price: <span>€</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    overview:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer
                        style={{
                          color: 'var(--mainBlue)',
                          textTransform: 'none',
                        }}
                      >
                        Back to Products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                      style={{
                        textTransform: 'none',
                      }}
                    >
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
