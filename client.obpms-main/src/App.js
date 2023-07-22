import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/navigation/MainHeader.jsx";
import AppFooter from "./components/navigation/AppFooter.js";
import About from "./components/about/About.js";
import Error404 from "./components/error/404";
import Home from "./components/homepage/Index.jsx";
import Login from "./components/authentication/Login";
import Profile from "./components/user/Profile";
import Privacy from "./components/navigation/Privacy.jsx";
import Appointment from "./components/appointment/Appointment.jsx";
import Register from "./components/authentication/Register";
import Terms from "./components/navigation/Terms.js";
import Products from "./components/products/Products.jsx";
import VerificationPage from "./components/authentication/VerificationPage.jsx";
import ForgotPass from "./components/authentication/ForgotPass.jsx";
import withRoot from "./components/theme/withRoot.js";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PassInput from "./components/authentication/PassInput.jsx";
import BookingHistory from "./components/user/BookingHistory.jsx";

function App({ user }) {
  const [usr, setUsr] = useState(false);
  const [curusr, setCurUsr] = useState(false);
  const [emlusr, setEmlUsr] = useState(false);

  useEffect(() => {
    // setUsr(user?.active)
    if (user?.user?.active === undefined) {
      setCurUsr(true);
    }
    if (user?.user?.active === undefined) {
      setEmlUsr(false);
    } else if (user?.user?.active === false) {
      setEmlUsr(true);
    }
  }, [user]);

  //  // console.log(user)
  //  // console.log(curusr ,user.user.active,emlusr);

  if (curusr && emlusr) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="verify_email" element={<VerificationPage />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (!usr) {
    return (
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error404 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product" element={<Products />} />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          <Route
            path="/resetpassword/:id"
            element={
              <PassInput/>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/input" element={<PassInput />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/user" user={user} element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/booking" user={user} element={
              <PrivateRoute>
                <BookingHistory/>
              </PrivateRoute>
            }
          />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    );
  }
}

const mapStatetoProps = (state) => ({
  user: state.data,
});

export default connect(mapStatetoProps, null)(withRoot(App));
