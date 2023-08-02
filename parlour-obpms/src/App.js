import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/style.scss";
import "./App.css";
import TheHeader from "./containers/TheHeader";
import TheSidebar from "./containers/TheSidebar";
import TheFooter from "./containers/TheFooter";
import { connect } from "react-redux";
import VerificationPage from "./views/newAuthentication/emailVerify";
import PassInput from  "./views/newAuthentication/PassInput";
import axios from "axios";

const ForgotPass = React.lazy(() =>import("./views/newAuthentication/ForgotPass"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const AddProduct = React.lazy(() => import("./views/saloon/AddProducts"));
const AddStylist = React.lazy(() => import("./views/saloon/AddStylist"));
const MyProduct = React.lazy(() => import("./views/saloon/MyProducts"));
const BookingHistory = React.lazy(() => import("./views/saloon/History"));
const MyBooking = React.lazy(() => import("./views/saloon/MyAppointment"));
const Login = React.lazy(() => import("./views/newAuthentication/Login"));
const Profile = React.lazy(() => import("./views/profile/Profile"));
const Signup = React.lazy(() => import("./views/newAuthentication/Register"));
const UpdateProduct = React.lazy(() => import("./views/saloon/UpdateProduct"));
const WalkIn = React.lazy(() => import("./views/saloon/WalkIn"));


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [email, setEmail] = useState(false);
  
  // // console.log(user);

  useEffect(() => {
    if (user?.token) {
      user.token === " " ? setCurrentUser(false) : setCurrentUser(true);
    }
    if (user?.parlour?.active === true) {
      setEmail(true);
    }
  }, [user]);

  if (currentUser) {
    if (currentUser && !email) {
      return (
        <Router>
          <Switch>
            <Route path="/verify" component={(props) => <VerificationPage {...props} />} />
          </Switch>
        </Router>
      );
    } else if (currentUser && email) {
      return (
        <Router>
          <div className="c-app c-default-layout">
            <TheSidebar />
            <div className="c-wrapper">
              <TheHeader />
              <div className="c-body">
                <React.Suspense fallback={loading}>
                  <Switch>
                    <Route exact path="/dashboard" component={(props) => <Dashboard {...props} />}/>
                    <Route  path="/add-products" component={AddProduct} />
                    <Route  path="/appointment" component={MyBooking} />
                    <Route  path="/history" component={BookingHistory} />
                    <Route  path="/my-products" component={MyProduct} />
                    <Route  path="/add-walk-in" component={WalkIn} />
                    <Route  path="/add-stylist" component={AddStylist} />
                    <Route  path="/update-product/:id" component={UpdateProduct} />
                    <Route  path="/profile" component={(props) => <Profile {...props} />}/>
                  </Switch>
                </React.Suspense>
              </div>
              <TheFooter />
            </div>
          </div>
        </Router>
      );
    }
  } else {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" component={Login} />
            <Route
              exact
              path="/forgot-password"
              name="Forgot Password"
              component={ForgotPass}
            />
            <Route exact path="/register" component={Signup} />
            <Route exact path="/resetpassword/:id" component={PassInput} />
            {/* <Route exact path="/verify_email" component={EmailVerify} /> */}

          </Switch>
        </React.Suspense>
      </Router>
    );
  }
};

const mapStatetoProps = (state) => ({
  user: state.user ? state.user.data : null,
});

export default connect(mapStatetoProps, null)(App);
