import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
import { BsFillBagPlusFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="navbar-main">
      <div className="navlogo-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dqkq5gmcw/image/upload/v1672054237/bag%20store/backpack-logo_vzpjrh.webp"
            alt="bag-logo"
            className="navbar-logo"
          />
        </Link>
      </div>

      <div className="navlist-container">
        <ul className="navlist">
          <Link to="/category/mochilas">
            <li className="navlist-item">MOCHILAS</li>
          </Link>
          <Link to="/category/carteras">
            <li className="navlist-item">CARTERAS</li>
          </Link>
        </ul>
      </div>
      <Link to="create" >
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="pink" variant="solid">
            <BsFillBagPlusFill />
          </Button>
        </Stack>
      </Link>
      <div className="navcart-container">

        <CartWidget />

      </div>
    </nav>
  );
};

export default NavBar;
