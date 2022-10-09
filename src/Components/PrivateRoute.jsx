import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

function PrivateRoute({ children }) {
  const state = useContext(AppContext)[0];
  if (!state.isAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default PrivateRoute;
