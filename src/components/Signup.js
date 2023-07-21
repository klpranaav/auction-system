import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import Navbar from "./Navbar";

function Signup() {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobNo, setMobNo] = useState("");

  async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("https://server3-rho.vercel.app/backend/signup/", {
      name,
      email,
      password,
      mobNo,
    });

    const responseData = response.data;
    console.log(responseData);
    if (responseData === "exist") {
      alert("User already exists");
    } else if (responseData === "not exist") {
      alert("User created");
      setName("");
      setEmail("");
      setPassword("");
      setMobNo("");
      history("/login");
    } else if (responseData === "invalidPassword") {
      alert("Invalid password type. Password should be at least 8 characters long, and contain at least 1 uppercase letter, 1 lowercase letter, 1 numeric value, and 1 special character.");
    } else if (responseData === "invalidMobileNumber") {
      alert("Invalid mobile number. Please enter a valid 10-digit mobile number.");
    } else if (responseData === "invalidEmail") {
      alert("Invalid email. Only Gmail addresses are accepted.");
    }
  } catch (error) {
    console.log(error.message);
    alert("An error occurred. Please try again.");
  }
}



  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="form-signin">
          <h1>Signup</h1>

          <form action="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                minLength="8"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                className="form-control"
                type="text"
                id="mobile"
                value={mobNo}
                onChange={(e) => {
                  setMobNo(e.target.value);
                }}
                placeholder="Mobile"
                pattern="[6789][0-9]{9}"
                required
              />
            </div>

            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
              onClick={submit}
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-3">
            <Link to="/login" className="link-button text-black">
              Login Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
