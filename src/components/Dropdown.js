import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import NavbarMenu from "./NavbarMenu";
import { useGlobalContext } from "../context/ContextWrapper";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 60%;
  height: 100%;
  background: #212121;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.9s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (min-width: 850px) {
    display: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const DropdownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const MenuLink = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.9 ease-in-out;

  &:hover {
    color: #ac8e60;
  }
`;

const Dropdown = () => {
  const { isOpen, toggle, about, services, pricing, scrollToSection } = useGlobalContext()
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownMenu onClick={toggle}>
        <MenuLink to="/">home</MenuLink>
        <MenuLink onClick={() => scrollToSection(about)}>
          about us
        </MenuLink>
        <MenuLink onClick={() => scrollToSection(services)}>
          services
        </MenuLink>
        <MenuLink to="booking">booking</MenuLink>
        <MenuLink onClick={() => scrollToSection(pricing)}>
          pricing
        </MenuLink>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
