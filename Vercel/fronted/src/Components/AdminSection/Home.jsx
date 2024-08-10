import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Grid, Paper, Drawer, List, ListItem, ListItemIcon, ListItemText,
  Box, Container, useMediaQuery, CircularProgress
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Menu as MenuIcon, AccountCircle,
  Archive as ArchiveIcon, GridOn as GridOnIcon, People as PeopleIcon, NotificationsActive as NotificationsActiveIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';
import SearchBar from './searchbar';

const API_ENDPOINT_STUDENTS = 'http://backend-url/api/v1/Students/students';
const API_ENDPOINT_TOP_STUDENTS = 'http://backend-url/api/v1/Students/top-students';
const API_ENDPOINT_QUESTIONS = 'http://backend-url/api/v1/Students/questions';
const API_ENDPOINT_RESULTS = 'http://backend-url/api/v1/Students/Admin-results';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [topStudents, setTopStudents] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [resultsCount, setResultsCount] = useState(0);
  const [attemptedStudentsCount, setAttemptedStudentsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const getAllStudents = async () => {
    const response = await fetch(API_ENDPOINT_STUDENTS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const getTopStudents = async () => {
    const response = await fetch(API_ENDPOINT_TOP_STUDENTS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const getQuestions = async () => {
    const response = await fetch(API_ENDPOINT_QUESTIONS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const getResults = async () => {
    const response = await fetch(API_ENDPOINT_RESULTS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [studentsData, topStudentsData, questionsData, resultsData] = await Promise.all([
          getAllStudents(),
          getTopStudents(),
          getQuestions(),
          getResults()
        ]);

        // Set the full student list and results data
        setData(studentsData);
        setTopStudents(topStudentsData); // Assuming topStudentsData is in the right format
        setQuestionCount(questionsData.count);
        setResultsCount(resultsData.length);

        // Filter students who have attempted the quiz
        const attemptedStudentIds = new Set(resultsData.map(result => result.studentId));
        const attemptedStudents = studentsData.filter(student => attemptedStudentIds.has(student.id));
        setAttemptedStudentsCount(attemptedStudents.length);

        // Sort results by scores and take top 5
        const sortedResults = resultsData.sort((a, b) => b.score - a.score);
        const topFiveStudents = sortedResults.slice(0, 5).map(result => ({
          name: result.username,
          marks: result.score
        }));
        setTopStudents(topFiveStudents);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) return <CircularProgress sx={{ display: 'block', margin: 'auto', paddingTop: 5 }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ bgcolor: '#0D6DB7' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: 'white' }}>
            Dashboard
          </Typography>
          <SearchBar onSearch={handleSearch} />
          {!isMobile && (
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={isSidebarOpen}
        onClose={toggleSidebar}
        sx={{
          width: 50,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', bgcolor: '#0D6DB7', color: 'white' },
        }}
      >
        <List>
          <ListItem button onClick={toggleSidebar}>
            <ListItemIcon sx={{ color: 'white' }}>
              <MenuIcon />
            </ListItemIcon>
            <ListItemText primary="Close Menu" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemIcon sx={{ color: 'white' }}>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/admin">
            <ListItemIcon sx={{ color: 'white' }}>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
          </ListItem>
          <ListItem button component={Link} to="/AdminResults">
            <ListItemIcon sx={{ color: 'white' }}>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary="Results" />
          </ListItem>
          <ListItem button component={Link} to="/students">
            <ListItemIcon sx={{ color: 'white' }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemIcon sx={{ color: 'white' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#0D6DB7', color: 'white' }}>
                <Typography variant="h6" gutterBottom>
                  STUDENTS
                </Typography>
                <ArchiveIcon />
                <Typography variant="h4">{attemptedStudentsCount}</Typography> {/* Updated to show attempted students */}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <Paper sx={{ p: 2, bgcolor: '#0D6DB7', color: 'white', cursor: 'pointer' }}>
                  <Typography variant="h6" gutterBottom>
                    QUESTIONS
                  </Typography>
                  <GridOnIcon />
                  <Typography variant="h4">{questionCount}</Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Link to="/AdminResults" style={{ textDecoration: 'none' }}>
                <Paper sx={{ p: 2, bgcolor: '#0D6DB7', color: 'white' }}>
                  <Typography variant="h6" gutterBottom>
                    RESULTS
                  </Typography>
                  <PeopleIcon />
                  <Typography variant="h4">{resultsCount}</Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, bgcolor: '#0D6DB7', color: 'white' }}>
                <Typography variant="h6" gutterBottom>
                  ALERTS
                </Typography>
                <NotificationsActiveIcon />
                <Typography variant="h4">42</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Top 5 Students
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={topStudents}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" fill="#8dc63f" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Student Data
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="marks" stroke="#8DC63F" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
