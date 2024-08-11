import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Button, Box, useMediaQuery, useTheme } from "@mui/material";
// import logo from './images/smit.png'; 
import { useState , useEffect} from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';


const Startpage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();
  // const { selectedSubject } = location.state || {};
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  
  // useEffect(() => {
    // gsap.fromTo(
    //   screenRef.current,
    //   { y: '100%' },
    //   { y: '0%', duration: 1, ease: 'power2.out' }
    // );

  //   const fetchSubjects = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/questions');
  //       const uniqueSubjects = [...new Set(response.data.map(q => q.subject))];
  //       setSubjects(uniqueSubjects);
  //     } catch (error) {
  //       console.error('Error fetching subjects:', error);
  //     }
  //   };

  //   fetchSubjects();
  // }, []);

  const handleBeginTest = () => {
    navigate(`/courseSelection`);
  };




  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{ mt: 2, ml: 2 }}>
      {/* <img src={logo} alt="Logo" style={{ width: isSmallScreen ? '100px' : '150px' }} /> */}
      <Container sx={{ mt: 2 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
          <Box
            sx={{
              width: '100%',
              maxWidth: 700,
              boxShadow: 3,
              borderRadius: 2,
              p: isSmallScreen ? 2 : 4,
              backgroundColor: 'white'
            }}
          >
            <Box textAlign="center" mb={4} sx={{ maxWidth: '700px', mx: 'auto' }}>
              <Typography variant="h3" color="primary" gutterBottom>
                Welcome to Quiz Questions
              </Typography>
              <Typography variant="body1" gutterBottom>
                Get ready to quiz, get ready to win!
              </Typography>
            </Box>
            <Paper
              elevation={6}
              sx={{
                p: isSmallScreen ? 2 : 4,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                maxWidth: '400px',
                mx: 'auto'
              }}
            >
              <Typography variant="h5" align="center" gutterBottom>
                A Fun Quiz
              </Typography>
              <Typography variant="body1" align="center" gutterBottom>
                Where learning meets enjoyment, and knowledge meets fun. Take the quiz challenge, discover new wonders, and unleash your inner genius.
              </Typography>
              <Box display="flex" justifyContent="center" marginTop="1pc">
                <Button
                  variant="contained"
                  onClick={handleBeginTest}
                  sx={{
                    backgroundColor: 'white',
                    color: '#0D6DB7',
                    '&:hover': {
                      backgroundColor: 'white'
                    }
                  }}
                >
                  Begin Test
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Startpage;

