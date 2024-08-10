import React from 'react';
import { Container, Typography, Paper, Button, Box, Grid } from "@mui/material";
import Logo from '../assets/smit-logo.png';
import './AdminPage.css'; 

const QuizPage = () => {
  return (
    <div className="page-container">
      <div className="logo-container">
        <img src={Logo} alt="SMIT Logo" style={{ height: '150px' ,  }} />
      </div>
      <Container
        className="main-container"
        maxWidth="lg"
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
         
               }}
      >
        <Paper
          elevation={6}
          sx={{
            width: '100%',
            backgroundColor: 'white',
            padding: { xs: '10px', md: '20px' }, 
            borderRadius: '16px',
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <Typography variant="h4" color="primary">
              CLASS SCHEDULE
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, md: 6 }, 
                  backgroundColor: '#0D6DB7', 
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100,
                }}
              >
                <Typography variant="h6">
                  WEB & APP DEVELOPMENT
                  <br/>
                
                Day :Saturday & Sunday
                <br />
                Time : 10:00am to 1:00pm
                <br/>
                  
                   Miss: IqraNaz
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, md: 6 }, 
                  backgroundColor: '#8DC63F', 
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100,
                }}
              >
                <Typography variant="h6">
                INFORMATION TECHNOLOGY
                  <br/>
              
                Day :Monday & Friday
                <br />
                Time : 12:00pm to 3:00pm
                <br/>
                  Miss: Hira
                  
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 2, md: 6 }, 
                  backgroundColor: '#0D6DB7', 
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 2,
                  minHeight: 100,
                }}
              >
                <Typography variant="h6">
                  GRAPHIC DESIGN COURSE
                  <br/>
                Day : saturday & sunday
                <br />
                Time : 11:00am to 3:00pm
                <br/>
                  Miss: Fatima

                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
            <Button variant="contained" sx={{ backgroundColor: '#0D6DB7', color: 'white' }}>
              Contiune
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default QuizPage;
