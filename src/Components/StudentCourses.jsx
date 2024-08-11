import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Paper, Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import logo from './images/smit.png'; 

const QuizPage = () => {
  const [open, setOpen] = useState(false);
  const screenRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      screenRef.current,
      { y: '100%' },
      { y: '0%', duration: 1, ease: 'power2.out' }
    );
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      sx={{ mt: 2, ml: 2 }} // Adjust the margins as needed
    >
      <img src={logo} alt="Logo" style={{ width: isSmallScreen ? '100px' : '150px' }} /> {/* Logo positioned top left */}
      <Container maxWidth="md" sx={{ mt: isSmallScreen ? 1 : 4 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <Box
            ref={screenRef}
            display="flex"
            justifyContent="center"
            alignItems="center"
            // minHeight={{ xs: 'calc(0vh - 0px)', sm: 'calc(100vh - 100px)' }}
            sx={{ mt: 4 }}
          >
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
              <Box
                textAlign="center"
                mb={4}
                sx={{
                  maxWidth: '700px',
                  mx: 'auto'
                }}
              >
                <Typography variant="h4" color="primary" gutterBottom fontWeight="900">
                  SELECT YOUR COURSE
                </Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: isSmallScreen ? 4 : 6,
                        backgroundColor: '#0D6DB7', // Blue color
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: 2,
                        minHeight: { xs: 80, sm: 100 } // Responsive height
                      }}
                    >
                      <Typography variant="h6">
                        WEB AND MOBILE APP DEVELOPMENT
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: isSmallScreen ? 4 : 6,
                        backgroundColor: '#8DC63F', // Green color
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: 2,
                        minHeight: { xs: 80, sm: 100 } // Responsive height
                      }}
                    >
                      <Typography variant="h6">
                        INFORMATION TECHNOLOGY (IT)
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: isSmallScreen ? 4 : 6,
                        backgroundColor: '#0D6DB7', // Blue color
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: 2,
                        minHeight: { xs: 80, sm: 100 } // Responsive height
                      }}
                    >
                      <Typography variant="h6">
                        AI AND CHATBOT DEVELOPER
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default QuizPage;
