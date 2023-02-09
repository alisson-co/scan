import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo_temp.svg";

// import css
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="O Coisa" />
      </Link>

      <ul className="list">
        <li className="items">
          <Link to="/">Início</Link>
        </li>
        <li className="items">
          <Link to="/about">Sobre</Link>
        </li>
        <li className="items">
          <Link to="/features">Recursos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
