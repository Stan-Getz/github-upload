import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md col-lg-4 text-center p-4"
                    >
                      <h3>Item Added to Cart</h3>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5 className="py-2">{title}</h5>
                      <h5 className="text-muted">Price: €{price}</h5>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => closeModal()}
                          style={{
                            color: 'var(--mainBlue)',
                          }}
                        >
                          Back to Store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Go to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  #modal {
    background: var(--mainWhite);
    border-radius: 0.5rem;
  }
`;
