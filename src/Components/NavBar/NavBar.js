import React from "react";
//import logo from "././assets/icons8-logo-500.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          Square Clothing Co.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Jackets
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shoes
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Collections
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Collection 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Collection 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Collection 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="d-flex">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//q: por qué no esta el icono en la línea 78?
//a: porque no se importó correctamente. Se importó como un componente de React, pero es un icono de Material UI.
//q: cómo lo soluciono?
//a: importando el icono de Material UI de la siguiente manera:
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
