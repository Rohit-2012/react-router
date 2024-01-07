import { NavLink, Outlet } from "react-router-dom";
import style from "./HostLayout.module.css";

const HostLayout = () => {
  return (
    <>
      <nav className={style.host_nav}>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? style.active_link : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? style.active_link : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
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
