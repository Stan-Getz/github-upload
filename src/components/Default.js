import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Default extends Component {
  render() {
    return (
      <div className="container ">
        <div className="row my-5">
          <div className="col-10 mx-auto text-center  py-lg-5 py-sm-2">
            <h1 className="display-3 my-2 text-title text-uppercase">
              404: error
            </h1>
            <h2 className="text-title my-3">page not found</h2>
            <h3 className="text-capitalize text-title text-title mx-2">
              The requested URL{' '}
              <span className="text-danger text-lowercase">
                {this.props.location.pathname}
              </span>{' '}
              is not found
            </h3>

            <p
              className="text-lowercase"
              style={{
                color: 'var(--mainBlue)',
                fontSize: '1.4rem',
                fontWeight: '500',
              }}
            >
              <span className="text-capitalize">Let's </span>
              go
              <span>
                <Link to="/">
                  <ButtonContainer pageNotFound className="mt-5 text-lowercase">
                    back to the store
                  </ButtonContainer>
                </Link>
              </span>
              and try from there
            </p>
          </div>
        </div>
      </div>
    );
  }
}
