import {  Navigate} from "react-router-dom";
import {connect} from 'react-redux'

const PrivateRoute = ({ children ,user}) => {
// const user = false
// // console.log(user?.user?.active);
 if (user?.user?.active === undefined) {
   user = false
 }else if (user?.user?.active === false){
   user = false
 }

  return user ? children : <Navigate  to="/login" />
};

const mapStatetoProps = (state) => ({
  user: state.data,
});


export default  connect(mapStatetoProps, null) (PrivateRoute);