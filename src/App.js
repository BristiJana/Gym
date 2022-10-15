import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import DataList from "./DataList";
import Experience from "./Experience";
import Contact from "./Contact";
function App(props) {
  return (
    <div>
      <div className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline solid black navbar navbar-expand-lg navbar-light fixed-top  ml-auto">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://as1.ftcdn.net/v2/jpg/02/37/07/74/1000_F_237077416_3eF5ooxZt69CRL06TOiYvq1KDHlywvMp.jpg"
                width="84"
                height="84"
                style={{ backgroundColor: "transparent" }}
              />
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
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item active">
                  <a class="nav-link " href="#">
                    Fitness
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Nutrition
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Gyms
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Become WTF Partner
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <form class="d-flex" role="search">
              <button
                class="btn btn-light btnn"
                type="submit"
                style={{ width: 80 }}
              >
                <p class="btc" style={{ marginBottom: "0" }}>
                  Login
                </p>
              </button>
            </form>
          </div>
        </nav>
      </div>

      <div class="firstdiv">
        <img
          class="d-block w-100 firstc"
          src="https://previews.123rf.com/images/alexwhite/alexwhite1603/alexwhite160302710/53462534-fitness-black-and-red-glossy-internet-icon-on-black-background.jpg"
          alt="First Dive"
        />
        <div class="carousel-caption d-none d-md-block"></div>
      </div>
      <div class="seconddiv">
        <DataList />
      </div>
      <div class="thirddiv">
        <Experience />
      </div>
      <div class="fordiv">
        <Contact />
      </div>
    </div>
  );
}
export default App;
