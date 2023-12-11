import { useState } from "react";
import "./Login.css";
import {
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase";

export default function Auth() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />}
    </div>
  );
}

function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleLogin(e)}>
        <center>
          <h1>LIST DO THIS</h1>
        </center>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Log in</button>
        <p onClick={() => setLogin(false)}>
          Don't have account? <span>Register</span>
        </p>
      </form>
    </div>
  );
}

function Register({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    registerWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handleRegister(e)}>
        <center>
          <h1>REGISTER NOW</h1>
        </center>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="rpassword">Confirm Password:</label>
        <input
          type="rpassword"
          name="rpassword"
          id="rpassword"
          placeholder="Confirm Password"
          onChange={(e) => setRPassword(e.target.value)}
          value={rPassword}
        />
        <button>Register</button>
        <p onClick={() => setLogin(true)}>
          Already have an account? <span>Log in</span>
        </p>
      </form>
    </div>
  );
}
