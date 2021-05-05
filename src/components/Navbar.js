import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_blue (1).svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* 
          https://www.iconfinder.com/icons/1737386/android_ios_iphone_mobile_mobilephone_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk
        */}
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-band"
            style={{ color: 'var(--lightBlue)' }}
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-shopping-cart" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--lightBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
