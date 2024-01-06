import { NavLink, Outlet } from "react-router-dom";
import style from "./HostLayout.module.css";

const HostLayout = () => {
  return (
    <>
      <nav className={style.host_nav}>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? style.active_link : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? style.active_link : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? style.active_link : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
