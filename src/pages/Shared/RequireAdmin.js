import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import useIsAdmin from "../../hooks/useIsAdmin";
import LoadingSpinner from "./LoadingSpinner";

function RequireAdmin({ children }) {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useIsAdmin(user);
  let location = useLocation();

  if (loading || adminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAdmin;
