import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './Components/Quiz';

import FirstPage from './Components/FirstPage';
import Result from './Components/Result';
import Admindashboard from './Components/Admindashboard';
import CourseSelection from './Components/CourseSelection';
import Startpage from './Components/Startpage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AuthGuard from "./Components/privateroute";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import AdminLogin from './Components/AdminSection/AdminLogin';
import Home from "./Components/AdminSection/Home"
import AddQuestion from "./Components/AdminSection/AddQuestion"
import AdminResults from "./Components/AdminSection/AdminResult"
const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />  {/* AdminLogin should not be protected */}

          {/* Protected Routes */}
          <Route path="/courseSelection" element={<AuthGuard component={<CourseSelection />} />} />
          <Route path="/quiz" element={<AuthGuard component={<Quiz />} />} />
          <Route path="/result" element={<AuthGuard component={<Result />} />} />
          <Route path="/admin" element={<AuthGuard component={<Admindashboard />} />} />
          <Route path="/start" element={<AuthGuard component={<Startpage />} />} />
          <Route path="/Home" element={<AuthGuard component={<Home />} />} />
          {/* <Route path="/addQuestion" element={<AuthGuard component={<AddQuestion />} />} /> */}
          <Route path="/AdminResults" element={<AuthGuard component={<AdminResults/>} />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
