import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  background: ${(prop) =>
    prop.pageNotFound ? 'var(--lightBlue)' : 'transparent'};
  border-color: ${(props) =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  border-radius: 0.3rem;
  border: 0.05rem solid
    ${(prop) => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
  color: ${(prop) => (prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
  color: ${(prop) =>
    prop.pageNotFound ? 'var(--mainBlue)' : 'var(--lightBlue)'};
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.2rem 0.5rem;
  padding: 0.2rem 0.5rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${(prop) =>
      prop.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  }
  &:hover {
    background: ${(prop) =>
      prop.pageNotFound ? 'transparent' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  }
`;
