
import Header from './components/header';
import Home from "../src/pages/home";
import { BrowserRouter as Router, Routes, Route, Navigate, Switch, Redirect } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup.js";
import Profile from "../src/pages/Profile";
import { useContext, useState, useCallback } from "react";
import { AuthContext } from "../src/contexts/AuthContext";
import { NotificationContainer } from "react-notifications";



function App() {
  // const { user } = useContext(AuthContext);
  const [rerenderFeed, setRerenderFeed] = useState(0);
  const handleChange = useCallback((newValue) => {
    setRerenderFeed(newValue);
  }, []);
  return (
    <>
      <Header />
      <GlobalStyles />
      <NotificationContainer />
      {/* <Router>
        <Routes>
          <Route
            path="/"
            element={ */}
              {/* // user ? ( */}
              {/* // <Home />
              // ) : (
                <Navigate to="/login" />
              // )
            }
          /> */}
          {/* <Route
            path="login"
            element={user ? */}
              {/* <Navigate to="/login" /> */}
               {/* : <Login />}
          /> */}
          {/* <Route
            path="/signup"
            element={user ?
              <Navigate to="/" />
              : <Signup />
            }
          />
          <Route
            path="/profile/:username"
            element={
              user ? (
                <Profile rerenderFeed={rerenderFeed} onChange={handleChange} />
              ) : (
                <Navigate to="/login" />
              )
            }
          /> */}
          {/* <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;