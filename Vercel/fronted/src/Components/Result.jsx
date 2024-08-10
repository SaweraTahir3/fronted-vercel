import React, { useEffect } from 'react';
import { Container, Typography, CircularProgress, Box, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StudentQuizResult = ({ score, totalQuestions, email, username, pv = 0, uv = 0 }) => {
  const percentage = (score / totalQuestions) * 100;

  // Function to save the result
  const saveResult = async () => {
    try {
      const response = await axios.post('http://backend-url/api/v1/Students/add-result', {
        email,
        username,
        score,
        totalPoints: totalQuestions,
        pv, // Include pv
        uv, // Include uv
      });
      console.log('Result saved successfully:', response.data);
    } catch (error) {
      console.error('Error saving result:', error);
      alert('There was an error saving your result. Please check your internet connection or try again later.');
    }
  };

  useEffect(() => {
    saveResult();
  }, []); // Empty dependency array ensures this runs once when component mounts

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
          width: { xs: '90%', sm: '80%', md: '60%' },
          minHeight: { xs: '50%', sm: '60%', md: '60%' },
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'medium',
          gap: 3,
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: { xs: '20px', sm: '30px', md: '40px' },
          border: '1px solid #dee2e6',
        }}
      >
        <Typography variant="h4" sx={{ 
          color: '#0D6DB7', 
          marginBottom: '15px', 
          fontWeight: 'bold', 
          textAlign: 'center' 
        }}>
          Congratulations! 
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
          Correct Questions: {score}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px',
            border: '2px solid #0D6DB7', // Adds a stroke-like border around the circular progress
            borderRadius: '50%', // Ensures the border is circular
            padding: '10px', 
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
          to="/start"
          underline="none"
          cursor='pointer'
          sx={{
            backgroundColor: '#0D6DB7',
            '&:hover': {
              backgroundColor: '#7aa94f',
            },
            color: 'white',
            fontSize: { xs: '1.5rem', sm: '1rem' },
            padding: '10px 30px',
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

export default StudentQuizResult;
