import logoImg from "../../images/icons/logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__row">
        <div className="header__logo">
          <img src={logoImg} alt="logo" />
          <span>ShoppyShop</span>
        </div>

        <div className="header__nav">
          <ul>
            <li><a href="#!">CATALOGUE</a></li>
            <li><a href="#!">FASHION</a></li>
            <li><a href="#!">FAVOURITE</a></li>
            <li><a href="#!">LIFESTYLE</a></li>
            <li><a href="#!" className="header__nav-btn">SIGN UP</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
