import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [showNavBar, setShowNavBar] = useState(
    window.innerHeight > 680 ? true : false
  );

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
    console.log(`Window Size: ${windowSize}`);
  });

  return (
    <div className="navv">
      <nav className="nav-container">
        <h2 className="nav-header">Easexport</h2>
        <div className="menu-container">
          {windowSize < 681 ? (
            <i className="fa-solid fa-cart-shopping" />
          ) : null}
          <i
            className="fa-solid fa-bars"
            onClick={() => setShowNavBar(showNavBar ? false : true)}
          ></i>
        </div>
        {windowSize > 680 ? (
          <ul className="nav-list">
            <li>
              <Link className="list-item" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="list-item" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/Accounts">
                Account
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping" />
            </li>
          </ul>
        ) : windowSize < 680 && showNavBar === true ? (
          <ul className="nav-list">
            <li>
              <Link className="list-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/sell-on-easexport">
                Sell on Easexport
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/wishlist">
                Wishlist
              </Link>
            </li>
            <li>
              <Link className="list-item" to="/Accounts">
                Account
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
