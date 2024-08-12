import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import logo from './smit.png';

const theme = createTheme({
  typography: {
    h4: {
      fontSize: "3rem",
      [createTheme().breakpoints.down('md')]: {
        fontSize: "2.5rem",
        lineHeight: "1.2",
        fontWeight: 400,
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: "2rem",
        lineHeight: "1.2",
        fontWeight: 300,
      },
    },
    h5: {
      fontSize: "2rem",
      [createTheme().breakpoints.down('md')]: {
        fontSize: "2rem",
        lineHeight: "1.3",
        fontWeight: 400,
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: "1.8rem",
        lineHeight: "1.2",
        fontWeight: 300,
      },
    },
    body2: {
      fontSize: "1.7rem",
      [createTheme().breakpoints.down('md')]: {
        fontSize: "1.5rem",
        lineHeight: "1.4",
        fontWeight: 400,
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: "1rem",
        lineHeight: "1.3",
        fontWeight: 300,
      },
    },
    body1: {
      fontSize: "1.2rem",
      [createTheme().breakpoints.down('md')]: {
        fontSize: "1rem",
        lineHeight: "1.5",
        fontWeight: 400,
      },
      [createTheme().breakpoints.down('sm')]: {
        fontSize: "0.9rem",
        lineHeight: "1.4",
        fontWeight: 300,
      },
    },
  },
});

// Now you can use the theme in your component
const FirstPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "white" }}>
            <img
              alt="SMIT Logo"
              src={logo}
              style={{ height: "60px", marginRight: "19px" }}
            />

            <Typography
              variant="body1"
              style={{ marginLeft: "auto", color: "black" }}
            >
              V 0.1 BETA
            </Typography>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          <Box mt={1}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              color="primary"
              style={{
             
                position: "absoulate",
                top: "0px",
              }}
            >
              Quiz Application
            </Typography>
          </Box>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            style={{
              marginLeft: "auto",
            }}
          >
            Saylani Mass IT Training Program
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            style={{
              marginLeft: "auto",
            }}
          >
            Saylani Mass IT Training program is an institute that delivers the
            latest IT education (FREE OF COST).
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
        
          >
            Saylani Mass Training Department is one of the departments that is
            running under Saylani Welfare Trust Management.
          </Typography>
          <Box mt={4} sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Button
              component={Link}
              to="/signup"
              variant="contained"
              color="primary"
            >
              Student Portal
            </Button>

            <Button
              component={Link}
              to="/AdminLogin"
              variant="contained"
              color="primary"
            >
              Admin Portal
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FirstPage;
