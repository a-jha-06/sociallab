import { useState } from "react";
import Login from "../../pages/Login";
import "./header.css";
import Home from "../../pages/home";

const Header = () => {





  const [overlay, setOverlay] = useState(false);









  const handleClose = () => {
    setOverlay(false);
  };



  //React Search Autocomplete




  return (
    <>
      <div
        className={`${overlay ? "search overlay" : "search"}`}
        onClick={handleClose}
      ></div>

      <header>
        <div className="header">
          <section className="navigation">
            <div className="container">
              <>
                <Home />
              </>
              <>
                <Login />
              </>
              {/* <nav>
                <ul >

                  <li><a href="/login">Sign In / Sign Out</a></li>
                  <li><a href="/home">Home</a></li>
                  <li><a href="/">Post</a></li>
                </ul>


              </nav> */}
            </div>

          </section>
          {/* {show ? <SubMenu toggleLeave={toggleLeave} /> : null} */}
        </div>
      </header>
    </>
  );
};

export default Header;