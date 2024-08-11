import React from 'react';
import { Container, Typography, CircularProgress, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const FinalScore = () => {
  const percentage = 75; // Example static percentage value
  const totalQuestions = 50; // Example total questions value
  const correctQuestions = 37; // Example correct answers value

  return (
    <div style={{ 
      height: '100vh', 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f8f9fa' 
    }}>
      <Container
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' }, // Responsive width
          minHeight: { xs: '50%', sm: '60%', md: '60%' }, // Reduced height for mobile view
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'medium',
          gap: 3,
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: { xs: '20px', sm: '30px', md: '40px' }, // Responsive padding
          border: '1px solid #dee2e6',
        }}
      >
        <Typography variant="h4" sx={{ 
          color: '#0D6DB7', 
          marginBottom: '15px', 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}>
          Congratulations! You Passed
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#495057', 
          marginBottom: '15px', 
          textAlign: 'center' 
        }}>
          You have completed the quiz.
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#495057', 
          marginBottom: '5px', 
          textAlign: 'center' 
        }}>
          Total Questions: {totalQuestions}
        </Typography>
        <Typography variant="h6" sx={{ 
          color: '#495057', 
          marginBottom: '20px', 
          textAlign: 'center' 
        }}>
          Correct Questions: {correctQuestions}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <CircularProgress variant="determinate" value={percentage} size={120} sx={{ color: '#0D6DB7' }} />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h5" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
              {`${Math.round(percentage)}%`}
            </Typography>
          </Box>
        </Box>
        <MuiLink
          component={Link}
          to="/"
          underline="none"
          sx={{
            backgroundColor: '#0D6DB7',
            '&:hover': {
              backgroundColor: '#7aa94f',
            },
            color: 'white',
            fontSize: { xs: '2rem', sm: '1rem' }, // Responsive font size
            padding: '20px 30px',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        >
          Return to Home
        </MuiLink>
      </Container>
    </div>
  );
};

export default FinalScore;




