import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constant";

const Header = () => {
  return (
    <>
      {/* Header starts here */}
      <header id="top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo-wrapper">
                <Link to="/">
                  <figure>
                    <img src={logo} className="img-fluid" alt="" />
                  </figure>
                </Link>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="search-wrapper">
                <form action="">
                  <div className="form-group">
                    <div className="search-wrapper">
                      <button className="search-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <input type="text" placeholder="Search Here" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-menu-wrapper">
                <ul>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Find Work{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      My Jobs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Reports
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="fa-solid fa-question"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="fa-solid fa-bell"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="fa-solid fa-paper-plane"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="fa-solid fa-user"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header ends here */}
    </>
  );
};

export default Header;
