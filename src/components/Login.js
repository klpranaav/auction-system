import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 
import Navbar from "./Navbar";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("https://server3-rho.vercel.app/backend/login", {
      email,
      password,
    });

    const responseData = response.data;
    console.log(responseData);
    if (responseData === "exist") {
      const url = "/home/" + email;
      history(url);
      alert("Successfully logged in.")
    } else if (responseData === "not exist") {
      alert("User has not signed up. Please check your email and try again.");
    } else if (responseData === "wrongPassword") {
      alert("Wrong password. Please check your password and try again.");
    } else {
      alert("Invalid email or password. Please check your credentials and try again.");
    }
  } catch (error) {
    console.log(error.message);
    alert("An error occurred. Please try again.");
  }
}





  return (
    <div>
      <Navbar />
      <div className="form-signin">
        <h1>Login</h1>

        <form action="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
            onClick={submit}
          >
            Submit
          </button>
        </form>

        <div className="text-center mt-3">
          <Link to="/signup" className="link-button text-black">
            SignUp Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
