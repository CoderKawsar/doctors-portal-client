import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link } from "react-router-dom";
import auth from "../../firebase.init";
import useIsAdmin from "../../hooks/useIsAdmin";

export default function Dashboard() {
  const [user] = useAuthState(auth);
  const [admin] = useIsAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-2xl font-bold text-purple-500 text-center">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/reviews">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
