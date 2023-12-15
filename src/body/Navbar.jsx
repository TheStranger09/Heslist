import "./body.css";
import Auth from "../login/Auth";
import { FaList } from "react-icons/fa";

export default function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h1 className="title">List Do This</h1>
      </div>
      <div className="nav-links">
        <p className="User">{user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}