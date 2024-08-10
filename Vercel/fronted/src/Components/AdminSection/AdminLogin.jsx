import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import LoginImage from '../smit.png';
import '../login.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleInput = (event) => {
    setValue(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const hardcodedEmail = "saylani@gmail.com";
    const hardcodedPassword = "12345";
  
    if (value.email === hardcodedEmail && value.password === hardcodedPassword) {
      toast.success("Login successful!");
  
      // Set a token or flag in cookies for authentication
      Cookies.set('token', 'hardcoded-auth-token');
  
      navigate("/Home");  // Redirect to the home page after login
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="loginPage d-flex justify-content-align-item-center bg-primary vh-100">
      <img src={LoginImage} alt="Login" className="loginImage" />
      <div className="addUser bg-white p-3 rounded w-25">
        <h3>Login</h3>
        <form onSubmit={handleSubmit} className="addUserForm">
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleInput}
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleInput}
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
              placeholder="Enter your Password"
            />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
