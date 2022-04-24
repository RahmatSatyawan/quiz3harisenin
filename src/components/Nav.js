import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const NavLanding = () => {
  let history = useHistory();

  return (
    <div>
      <div className="topnav">
        <Link to="/">
          <img src={Logo} alt={"logo"} className="h-12" />
        </Link>

        {/* Menu untuk user belum Login */}
        {!Cookies.get("token") && (
          <>
            <Link to="/">Lowongan Pekerjaan</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {/* Menu untuk user yang sudah Login */}
        {Cookies.get("token") && (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/dashboard/list-job-vacancy">List Job</Link>
            <Link to="/dashboard/list-job-vacancy/form">Form</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/dashboard">Change Password</Link>
            <form>
              <input type="text" />
              <input type="submit" defaultValue="Cari" />
            </form>
          </>
        )}
        {/* Menu untuk user yang sudah Login-Logout */}
        {Cookies.get("token") && (
          <span
            onClick={() => {
              Cookies.remove("token");
              history.push("/login");
              // jika tidak mau history.push('/login'), bisa pakai window.location = "/login"
            }}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default NavLanding;
