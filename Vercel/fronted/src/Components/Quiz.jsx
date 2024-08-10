import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Container, Grid, Paper, Box, useMediaQuery, useTheme, CircularProgress, Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import Result from './Result';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [showResult, setShowResult] = useState(false); 
  const [score, setScore] = useState(0); 
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { selectedSubject } = location.state || {};
  const query = new URLSearchParams(location.search);
  const subject = query.get('subject');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://backend-url/api/questions');
        const filteredQuestions = response.data.filter(q => q.subject === subject);
        setQuestions(filteredQuestions);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        toast.error('Error fetching questions. Please try again later.');
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [subject]);

  const handleAnswer = (selectedAnswer) => {
    setIsQuestionAnswered(true);
    const currentQuestion = questions[currentQuestionIndex];
    setSelectedOption(selectedAnswer);
    if (selectedAnswer === currentQuestion.correct) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsQuestionAnswered(false);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
      saveResult();
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setIsQuestionAnswered(false);
    setSelectedOption(null);
    setIsQuizFinished(false);
    setScore(0);
    setShowResult(false);
  };

  const saveResult = async () => {
    try {
      // These values should come from your state or context
      const email = 'user@example.com'; // Replace with actual email from state/context
      const username = 'username123'; // Replace with actual username from state/context
      const status = 'Completed'; // Assuming 'Completed' status
      const totalPoints = questions.length;
      const pointsEarned = score;
      const pv = 0; // Replace with actual value if needed
      const uv = 0; // Replace with actual value if needed
  
      // Ensure all required fields are defined
      if (!status || totalPoints === undefined || pointsEarned === undefined) {
        throw new Error('Missing required fields');
      }
  
      const response = await axios.post('http://backend-url/api/v1/Students/add-result', {
        username,
        email,
        status,
        totalPoints,
        pointsEarned,
        pv,
        uv,
      });
      console.log('Result saved successfully:', response.data);
      // Optionally, display a success message to the user
    } catch (error) {
      console.error('Error saving result:', error.response?.data?.message || error.message);
      // Optionally, display an error message to the user
    }
  };
  

  if (loading) {
    return <Typography>Loading questions...</Typography>;
  }

  if (showResult) {
    return <Result score={score} totalQuestions={questions.length} />;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ minHeight: '100vh', p: 2 }}
    >
      <Container 
        maxWidth="md" 
        sx={{ mt: isSmallScreen ? 1 : 4, display: 'flex', justifyContent: 'center' }}
      >
        <Paper elevation={3} sx={{ padding: isSmallScreen ? '16px' : '24px', borderRadius: '12px', width: '100%' }}>
          {isQuizFinished ? (
            <Box 
              sx={{ 
                textAlign: 'center', 
                width: { xs: '90%', sm: '80%', md: '60%' }, 
                margin: 'auto',
                boxShadow: 3,
                borderRadius: '15px',
                padding: { xs: '20px', sm: '30px', md: '40px' }, 
                border: '1px solid #dee2e6'
              }}
            >
              <Typography variant="h4" sx={{ color: '#0D6DB7', marginBottom: '15px', fontWeight: 'bold' }}>
                Congratulations!
              </Typography>
              <Typography variant="h6" sx={{ color: '#495057', marginBottom: '15px' }}>
                You have completed the quiz.
              </Typography>
              <Typography variant="h6" sx={{ color: '#495057', marginBottom: '5px' }}>
                Total Questions: {totalQuestions}
              </Typography>
              <Typography variant="h6" sx={{ color: '#495057', marginBottom: '20px' }}>
                Correct Questions: {score}
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
                to="/start"
                underline="none"
                sx={{
                  backgroundColor: '#0D6DB7',
                  '&:hover': {
                    backgroundColor: '#7aa94f',
                  },
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '1rem' }, 
                  padding: '20px 30px',
                  borderRadius: '5px',
                  textAlign: 'center',
                }}
              >
                Return to Home
              </MuiLink>
            </Box>
          ) : (
            <>
              <Typography variant="h5" component="h2" gutterBottom align="left">
                {currentQuestion.question}
              </Typography>
              <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '16px' }}>
                {['a', 'b', 'c', 'd'].map(optionKey => (
                  <Grid item xs={12} sm={6} md={5} key={optionKey} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      variant="contained"
                      onClick={() => handleAnswer(currentQuestion[optionKey])}
                      sx={{
                        width: '100%',
                        maxWidth: '250px',
                        backgroundColor: selectedOption === currentQuestion[optionKey] ? 'secondary.light' : 'primary.light',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: selectedOption === currentQuestion[optionKey] ? 'secondary.dark' : 'primary.dark',
                        },
                      }}
                      disabled={isQuestionAnswered}
                    >
                      {currentQuestion[optionKey]}
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ padding: '10px 20px', borderRadius: '8px' }}
                >
                  Next
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default Quiz;
