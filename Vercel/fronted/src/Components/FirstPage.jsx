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
      fontSize: "3.9rem",
    },
    h5: {
      fontSize: "2.9rem",
    },
    body2: {
      fontSize: "1.7rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
});

const FirstPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <AppBar position="static" >
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
            // mt:" 5rem",
          }}
        >
          {/* <div className="part"> */}
            <Box mt={1}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                color="primary"
                style={{
                  lineHeight: "80px",
                  fontWeight: "100",
                  fontSize: "70px",
                  position: " absoulate",
                  top: "0px",
                }}
              >
                Quiz Application
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{
                lineHeight: "70px",
                fontSize: "50px",
                marginLeft: "auto",
              }}
            >
              Saylani Mass IT Training Program
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{
                lineHeight: "60px",
                fontSize: "15px",
                marginLeft: "auto",
              }}
            >
              {/* Saylani Mass Training Department is one of the departments that is running under Saylani Welfare Trust Management. */}
              Saylani Mass IT Training program is an institute that delivers the
              latest IT education (FREE OF COST).
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{
                fontSize: "15px",
                lineHeight: "60px",
                marginLeft: "auto",
                fontWeight: "100",
              }}
            >
              Saylani Mass Training Department is one of the departments that is
              running under Saylani Welfare Trust Management.
              {/* Saylani Mass IT Training program is an institute that delivers the latest IT education (FREE OF COST). */}
            </Typography>
            <Box mt={4} sx={{ display: "flex", flexDirection: "row", gap: 2}}>
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
          {/* </div> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default FirstPage;
