import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';

export const Nav = styled.nav`
  background: rgb(236,76,138);
  height: 50px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Back = styled(FaAngleLeft)`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(100%, 45%);
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  color: white;
  align-items: center;
  margin-right: -24px;
  width: 100vw;
  padding-left: 1.5rem;
  align-items: center;
  white-space: nowrap;
  margin-top: 3px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: rgb(236,76,138);
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0000;
  }
`;

export const Arrow = styled(FaRegArrowAltCircleRight)`
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;
