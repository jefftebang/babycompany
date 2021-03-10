import styled from "styled-components";
import { Hamburger } from "../components/Hamburger";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

const NavMaster = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  @media (max-width: 480px) {
    display: none;
  }
`;

const Nav1 = styled.div`
  width: 100vw;
  height: 110px;
  display: flex;
  justify-content: center;
`;

const LogoHolder = styled.div`
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin-left: 20px;
  }
`;

const Logo = styled.div`
  width: 60px;
  height: 70px;
  background-image: url("/images/baby-comp-logo.png");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 480px) {
    width: 45px;
    height: 55px;
  }
`;

const SearchArea = styled.div`
  width: auto;
  height: 100%;
  margin: 0 300px 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media (max-width: 480px) {
    height: 20%;
    margin-top: 100px;
  }
`;

const SearchInput = styled.input`
  height: 30px;
  width: 200px;
  border: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #3c3c3c;
  outline: none;
  background-color: #f8f8f8;
  border: 1px solid transparent;
  :focus {
    border: 1px solid #f6e300;
  }
`;

const SearchButton = styled.div`
  width: 34px;
  height: 34px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #f6e300;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchSymbol = styled.img`
  height: 15px;
  width: 15px;
`;

const CartArea = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 15%;
    margin-top: 20px;
  }
`;

const Cart = styled.img`
  width: 17px;
  height: 15px;
  margin-right: 10px;
  cursor: pointer;
  z-index: 1;
`;

const Buy = styled.a`
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  color: #333;
  z-index: 1;
`;

const Lines = styled.div`
  width: 78%;
  height: 2px;
  background-image: url("./images/lines.png");
  @media (max-width: 480px) {
    margin-top: 20px;
    width: 40%;
  }
`;

const Nav2 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Nav2Group = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  @media (max-width: 480px) {
    height: 50%;
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  font-size: 0.8rem;
  font-weight: 700;
  color: #333;
  margin-right: 32px;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;

  @media (max-width: 480px) and (min-width: 415px) {
    font-size: 1.5rem;
    margin: 20px 0 15px 0;
  }

  @media (max-width: 414px) {
    margin: 15px 0 10px 0;
    font-size: 1rem;
  }
`;

const SocMedGroup = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  @media (max-width: 480px) {
    height: 50%;
    width: 100%;
    justify-content: center;
  }
`;

const SocMed1 = styled.img`
  width: 11px;
  height: 16px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 16px;
    height: 21px;
  }
`;

const SocMed2 = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 21px;
    height: 21px;
    margin-left: 20px;
  }
`;

const SocMed3 = styled.img`
  width: 18px;
  height: 16px;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 23px;
    height: 21px;
    margin-left: 20px;
  }
`;

const SocMed4 = styled.img`
  width: 14px;
  height: 16px;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 19px;
    height: 21px;
    margin-left: 20px;
  }
`;

export default function NavBar() {
  return (
    <NavMaster>
      <Nav1>
        <LogoHolder>
          <a style={{ zIndex: 1 }} href="/">
            <Logo />
          </a>
        </LogoHolder>
        <SearchArea>
          <SearchInput type="text" placeholder="Search here.." />
          <SearchButton>
            <SearchSymbol src="./images/search.png" />
          </SearchButton>
        </SearchArea>
        <CartArea>
          <Cart src="./images/shopping-cart.png" />
          <Buy href="#">Buy Online</Buy>
        </CartArea>
      </Nav1>
      <Lines />
      <Nav2>
        <Nav2Group>
          <NavLink>Products</NavLink>
          <NavLink>Mom Card</NavLink>
          <NavLink>Star Baby</NavLink>
          <NavLink>Gift Registry</NavLink>
          <NavLink>Grand Baby Fair</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>Contact</NavLink>
        </Nav2Group>
        <SocMedGroup>
          <SocMed1 src="./images/soc-meds/facebook.png" />
          <SocMed2 src="./images/soc-meds/instagram.png" />
          <SocMed3 src="./images/soc-meds/youtube.png" />
          <SocMed4 src="./images/soc-meds/twitter.png" />
        </SocMedGroup>
      </Nav2>
    </NavMaster>
  );
}

// Mobile Navbar

const MobileNav = styled.div`
  display: none;
  @media (max-width: 480px) {
    width: 100vw;
    height: 70px;
    background-color: #fff;
    position: fixed;
    top: 0;
    box-shadow: 0 6px 7px -5px rgba(0, 0, 0, 0.28);
    display: flex;
    flex-direction: column;
    font-family: "Sora", sans-serif;
    z-index: 2;
  }
`;

const MobileNavGroup = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
`;

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const MenuTransition = useTransition(isOpen, null, {
    from: {
      position: "absolute",
      top: "0",
      right: "0",
      clipPath: "circle(20px at 100% -10%)",
    },
    enter: {
      position: "absolute",
      top: "0",
      right: "0",
      clipPath: "circle(1000px at 100% -10%)",
    },
    leave: {
      position: "absolute",
      top: "0",
      right: "0",
      clipPath: "circle(0px at 100% -10%)",
    },
    config: { tension: 620, friction: 120 },
  });

  return (
    <MobileNav>
      <LogoHolder>
        <a style={{ zIndex: 1 }} href="/">
          <Logo onClick={() => setIsOpen(false)} />
        </a>
      </LogoHolder>
      <span>
        {MenuTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <MobileNavGroup>
                  <SearchArea>
                    <SearchInput type="text" placeholder="Search here.." />
                    <SearchButton onClick={() => setIsOpen(false)}>
                      <SearchSymbol src="./images/search.png" />
                    </SearchButton>
                  </SearchArea>
                  <CartArea>
                    <a style={{ zIndex: 1 }} href="/cart">
                      <Cart
                        src="./images/shopping-cart.png"
                        onClick={() => setIsOpen(false)}
                      />
                    </a>
                    <Buy href="/store" onClick={() => setIsOpen(false)}>
                      Buy Online
                    </Buy>
                  </CartArea>
                  <Lines />
                  <Nav2Group>
                    <NavLink href="/products" onClick={() => setIsOpen(false)}>
                      Products
                    </NavLink>
                    <NavLink href="/mom-card" onClick={() => setIsOpen(false)}>
                      Mom Card
                    </NavLink>
                    <NavLink href="/star-baby" onClick={() => setIsOpen(false)}>
                      Star Baby
                    </NavLink>
                    <NavLink
                      href="/gift-registry"
                      onClick={() => setIsOpen(false)}
                    >
                      Gift Registry
                    </NavLink>
                    <NavLink
                      href="/grand-baby-fair"
                      onClick={() => setIsOpen(false)}
                    >
                      Grand Baby Fair
                    </NavLink>
                    <NavLink href="/blogs" onClick={() => setIsOpen(false)}>
                      Blogs
                    </NavLink>
                    <NavLink href="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </NavLink>
                  </Nav2Group>
                  <SocMedGroup>
                    <a style={{ zIndex: 1 }} href="/facebook">
                      <SocMed1
                        src="./images/soc-meds/facebook.png"
                        onClick={() => setIsOpen(false)}
                      />
                    </a>
                    <a style={{ zIndex: 1 }} href="/instagram">
                      <SocMed2
                        src="./images/soc-meds/instagram.png"
                        onClick={() => setIsOpen(false)}
                      />
                    </a>
                    <a style={{ zIndex: 1 }} href="/youtube">
                      <SocMed3
                        src="./images/soc-meds/youtube.png"
                        onClick={() => setIsOpen(false)}
                      />
                    </a>
                    <a style={{ zIndex: 1 }} href="/twitter">
                      <SocMed4
                        src="./images/soc-meds/twitter.png"
                        onClick={() => setIsOpen(false)}
                      />
                    </a>
                  </SocMedGroup>
                </MobileNavGroup>
              </animated.div>
            )
        )}
      </span>
      <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </MobileNav>
  );
}
