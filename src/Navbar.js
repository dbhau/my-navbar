import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the Modal component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Nav>
        <Logo onClick={openModal}>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ce33f2102795941.5f3e946eb2e00.jpg" alt="Company Logo" />
        </Logo>
        <Hamburger onClick={toggle}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/services">Services</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
        </Menu>
      </Nav>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ce33f2102795941.5f3e946eb2e00.jpg" alt="Enlarged Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </Modal>
    </>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #333;
`;

const Logo = styled.div`
  padding: 1rem 0;
  cursor: pointer;
  img {
    height: 40px; // Adjust the size as needed
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #fff;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;

  &:hover {
    color: #e91e63;
  }
`;
