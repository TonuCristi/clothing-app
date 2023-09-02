import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const LinkStyle = {
  fontSize: "1.4rem",
  textDecoration: "none",
  color: "#000",
  fontWeight: "700",
};

const LogoLinkStyle = {
  textDecoration: "none",
  color: "#000",
  justifySelf: "center",
};

const Container = styled.nav`
  background-color: #fff;
  padding: 1.2rem 4.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  box-shadow: 0rem 0.8rem 1.2rem rgb(134, 142, 150, 0.5);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  justify-self: start;
`;

const Logo = styled.div`
  font-size: 6.4rem;
  transition: all 0.3s ease;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 900;

  &:hover ${Logo} {
    text-shadow: 0rem 0.6rem 1.2rem;
  }
`;

const LogoText = styled.div`
  font-size: 1.6rem;
`;

const CartProfile = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Cart = styled.div`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  gap: 0.4rem;
  color: #fff;
  background-color: #000;
  padding: 0.8rem 1.2rem;
  border-radius: 2.7rem;
  cursor: pointer;
`;

const CartIcon = styled(BiSolidShoppingBagAlt)``;

const ProfileIcon = styled(IoMdSettings)`
  font-size: 2.4rem;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <Container>
      <NavLinks>
        <NavLink style={LinkStyle} to="collection">
          Our Collections
        </NavLink>
        <NavLink style={LinkStyle} to="about">
          About Us
        </NavLink>
      </NavLinks>
      <NavLink style={LogoLinkStyle} to="/">
        <LogoContainer>
          <LogoText>to</LogoText>
          <Logo>x</Logo>
          <LogoText>nu</LogoText>
        </LogoContainer>
      </NavLink>
      <CartProfile>
        <Cart>
          <CartIcon />
          Cart
        </Cart>
        <ProfileIcon />
      </CartProfile>
    </Container>
  );
}
