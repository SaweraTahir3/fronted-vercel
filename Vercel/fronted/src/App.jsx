import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Admindashboard from './components/Admindashboard';
import CourseSelection from './components/CourseSelection';
import Startpage from './components/Startpage';
import Login from './components/Login';
import FirstPage from './components/FirstPage';
import Signup from './components/Signup';
import AuthGuard from "./components/privateroute";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import AdminLogin from './components/AdminSection/AdminLogin';
import Home from "./components/AdminSection/Home"
import AddQuestion from "./components/AdminSection/AddQuestion"
import AdminResults from "./components/AdminSection/AdminResult"

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
