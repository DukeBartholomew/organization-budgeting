import { useEffect, useState } from "react";
import axios from "axios";
import { getJwt, setJWT, removeJWT } from "./utils/jwt";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const user = {
  id: 1,
  first: "Duke",
  last: "Bartholomew",
  username: "dukeBartholomew",
  password: "123",
  age: 21,
  admin: true,
};

//var loggedIn = false;

const url = "http://localhost:8000";

const handleLogin = (username, password, setLoggedin) => {
  axios
    .post(url + "/logIn", { username, password })
    .then((res) => {
      setJWT(res.data.token);
      // alert(JSON.stringify(res.data));
      setLoggedin(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleRegistration = (user) => {
  axios
    .post(url + "/register", user)
    .then((res) => {
      alert(JSON.stringify(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleProfileRequest = () => {
  axios
    .post(url + "/profile", {
      Headers: {
        "Content-Type": "application/json",
        jwt: getJwt(),
      },
    })
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleLogout = () => {
  removeJWT();
  alert("Logged Out");
};

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [admin, setAdmin] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedin] = useState(false);
  useEffect(() => {
    if (loggedIn === true) {
      navigate("/home");
    }
  }, [loggedIn, setLoggedin]);

  return (
    <>
      <div className="login-container">
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              handleLogin(username, password, setLoggedin);

              setPassword("");
            }}
          >
            Login
          </button>
          <button type="button" onClick={() => navigate("/register")}>
            Register
          </button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </>
  );
};
