import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./DataList.css";
import Popibox from "./popibox.js";

function DataList() {
  const datadic = [
    {
      id: "1",
      title: "WTF:Hybrid Gym",
      address: "A 452 Baseent, New Ashok Nagar",
      miles: "3.18 minutes away|2.12 km",
      price: "Rs 3600 for 3 Months",
      offer: "",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Delhi",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 2,
      title: "WTF:Military Gym",
      address: "Chaman Awana office,Sector 15",
      miles: "3.66 minutes away|2.44 km",
      price: "Rs 3000 for 3 Months",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Gaziabad",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 3,
      title: "WTF:The Iron Pumpers Gym",
      address: "Patparganj Road,Pocket 5",
      miles: "5.22 minutes away|3.48 km",
      price: "",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Greater Noida",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 4,
      title: "WTF:Hybrid Gym",
      address: "A 452 Baseent, New Ashok Nagar",
      miles: "3.18 minutes away|2.12 km",
      price: "Rs 3600 for 3 Months",
      offer: "",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Delhi",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 5,
      title: "WTF:Military Gym",
      address: "Chaman Awana office,Sector 15",
      miles: "3.66 minutes away|2.44 km",
      price: "Rs 3000 for 3 Months",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Gaziabad",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 6,
      title: "WTF:The Iron Pumpers Gym",
      address: "Patparganj Road,Pocket 5",
      miles: "5.22 minutes away|3.48 km",
      price: "",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Greater Noida",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 7,
      title: "WTF:Hybrid Gym",
      address: "A 452 Baseent, New Ashok Nagar",
      miles: "3.18 minutes away|2.12 km",
      price: "Rs 3600 for 3 Months",
      offer: "",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Delhi",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 8,
      title: "WTF:Military Gym",
      address: "Chaman Awana office,Sector 15",
      miles: "3.66 minutes away|2.44 km",
      price: "Rs 3000 for 3 Months",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Gaziabad",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 9,
      title: "WTF:The Iron Pumpers Gym",
      address: "Patparganj Road,Pocket 5",
      miles: "5.22 minutes away|3.48 km",
      price: "",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Greater Noida",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 10,
      title: "WTF:Hybrid Gym",
      address: "A 452 Baseent, New Ashok Nagar",
      miles: "3.18 minutes away|2.12 km",
      price: "Rs 3600 for 3 Months",
      offer: "",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Delhi",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 11,
      title: "WTF:Military Gym",
      address: "Chaman Awana office,Sector 15",
      miles: "3.66 minutes away|2.44 km",
      price: "Rs 3000 for 3 Months",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Gaziabad",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
    {
      id: 12,
      title: "WTF:The Iron Pumpers Gym",
      address: "Patparganj Road,Pocket 5",
      miles: "5.22 minutes away|3.48 km",
      price: "",
      offer: "1",
      im: "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
      place: "Greater Noida",
      locate: "cgcgcgcgcgcgcjcghtr67edevdejvcvcvjvbbbvjvjesxdgxdxxgxxxg",
    },
  ];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [q, setQ] = useState("");
  //const [items, setItems] = useState([]);
  const [searchParam] = useState(["title", "address", "miles", "place"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  const [display, setdisplay] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // fetch(
    //   "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
    // )
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, []);

  function search(items) {
    return items.filter((item) => {
      if (item.place == filterParam) {
        return searchParam.some((newItem) => {
          // setdisplay(item.locate);
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const listItems = search(datadic).map((item) => {
    return (
      <div class="card mb-3 liscar">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={item.im} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h4 class="card-title cts">{item.title}</h4>
              <p>⭐⭐⭐⭐⭐</p>
              <p class="card-text ctt">{item.address}</p>
              <p class="card-text ctt1">
                <NearMeIcon style={{ color: "#367E18" }} />
                <small>{item.miles}</small>
              </p>
              <h5 class="ctf">{item.price}</h5>
              <a href="#" class="btn btn-light bobtn">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div class="search">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input searchTerm"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search gym name here..."
        />

        <button class="searchButton1" onClick={togglePopup}>
          <LocationOnIcon />
        </button>
        {isOpen && (
          <Popibox
            content={
              <>
                <p
                  style={{
                    fontSize: "20px",
                    marginBottom: "180px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  In order to give you better experience we need your location
                </p>
              </>
            }
            handleClose={togglePopup}
          />
        )}
        <button type="submit" class="searchButton">
          Clear
        </button>
      </div>

      <div className="wrappi">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h1 style={{ color: "white" }}>Filters</h1>
          </div>

          <ul class="list-unstyled components ps-0">
            <li class="mb-1">
              <h5 className="uli">Location</h5>
              <input
                type="search"
                name="search-form"
                className="search-list"
                placeholder="Enter Location"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </li>
            <li class="mb-1">
              <h5 className="uli"> Price</h5>
              <input className="pricom" placeholder="Min" />
              <input
                className="pricom"
                style={{ marginRight: 0 }}
                placeholder="Max"
              />
            </li>
            <li>
              <h5 className="uli">Cities</h5>
              <div className="search-drop">
                <select
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  className="custom-select"
                  placeholder="Select City"
                >
                  <option value="All">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Gaziabad">Gaziabad</option>
                  <option value="Greater Noida">Greater Noida</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">New Delhi</option>
                </select>
                <span className="focus"></span>
              </div>
            </li>
            {/* {display != null ? (
              <li>
                <p className="pricom"> {display}</p>
              </li>
            ) : (
              <></>
            )} */}
          </ul>
        </nav>
        <div id="conti">{listItems}</div>
      </div>
    </>
  );
}

export default DataList;
