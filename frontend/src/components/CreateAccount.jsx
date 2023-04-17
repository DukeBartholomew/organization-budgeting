import { useState } from "react";
import axios from "axios";
import { getJwt, setJWT, removeJWT } from "./utils/jwt";
import { useNavigate } from "react-router-dom";
import Navbar from "../views/Navbar";
import "./CreateAccount.css";


const user = {
  id: 1,
  first: "Duke",
  last: "Bartholomew",
  username: "dukeBartholomew",
  password: "123",
  age: 21,
  admin: true,
};


const url = "http://localhost:8000";

const handleLogin = (username, password) => {
  axios
    .post(url + "/logIn", { username, password })
    .then((res) => {
      setJWT(res.data.token);
      alert(res.data.username);
    })
    .catch((err) => {
      console.log(err.res.data);
    });
};

const handleRegistration = (user) => {
  axios.post(url + '/register', user).then((res) => {
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

const convertAdmin = (aval) => {
  if(aval == 'True'){
    return 1;
  } else {
    return 0;
  }
}

export const CreateAccount = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const admin = true;
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="create-account-container">
        <form className="create-account-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            className="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              handleRegistration({
                username,
                password,
                firstName,
                lastName,
                age,
                admin,
              });
              navigate('/home');
            }}
          >
            Create Account
          </button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </>
  );
};
