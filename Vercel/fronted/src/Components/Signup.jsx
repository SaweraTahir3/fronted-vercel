import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginImage from './smit.png'

const Signup = () => {
  const [Register, setRegister] = useState({
    name: "",
    email: "",
    password: ""
});
let navigate = useNavigate();
const [registerMessage, setRegisterMessage] = useState("");

const handleRegisterChange = (event) => {
    setRegister({
        ...Register,
        [event.target.name]: event.target.value
    });
}

const handleRegister = async (event) => {
  event.preventDefault();
  try {
      let response = await axios.post("http://backend-url/api/auth/signup", Register);

      setRegisterMessage(response.data.message);
      toast.success(response.data.message); // Show success message from response

      setRegister({
          name: "",
          email: "",
          password: ""
      });
      navigate("/login");
  } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
          setRegisterMessage(error.response.data.message);
          toast.error(error.response.data.message); 
      } else {
          toast.error("An unexpected error occurred. Please try again.");
      }
  }
}

  return (
    <div className="signupPage" >
      <img src={LoginImage} alt="Login" className="loginImage" />
      <div className="addUser">
        <h3>Sign Up</h3>
        <form onSubmit={handleRegister} className="addUserForm" action="" >
          <div className="inputGroup">
            <label htmlFor="name">Name:</label>
            <input
            onChange={handleRegisterChange}
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
            onChange={handleRegisterChange}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            <label htmlFor="password">Password:</label>
            <input
            onChange={handleRegisterChange}
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Password"
            />
            <button type="submit" className="btn btn-success">
              Sign Up
            </button>
          </div>
        </form>
        <div className="login">
          <p>Already have an Account? </p>
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
         
        </div>
      </div>
      
    </div>
    
  );
};

export default Signup;





