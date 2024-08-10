import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, MenuItem, Paper } from '@mui/material';

const AdminDashboard = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ a: '', b: '', c: '', d: '' });
  const [correctOption, setCorrectOption] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the inputs before sending the request
    if (!question || !options.a || !options.b || !options.c || !options.d || !correctOption || !subject) {
      alert('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://backend-url/api/questions/add', {
        question,
        a: options.a,
        b: options.b,
        c: options.c,
        d: options.d,
        correct: correctOption,
        subject
      });
      setQuestion('');
      setOptions({ a: '', b: '', c: '', d: '' });
      setCorrectOption('');
      setSubject('');
      alert('Question added successfully');
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Failed to add question');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Paper sx={{ p: 3, borderRadius: '8px' }}>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Option A"
            value={options.a}
            onChange={(e) => setOptions({ ...options, a: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Option B"
            value={options.b}
            onChange={(e) => setOptions({ ...options, b: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Option C"
            value={options.c}
            onChange={(e) => setOptions({ ...options, c: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Option D"
            value={options.d}
            onChange={(e) => setOptions({ ...options, d: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Correct Option"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="Correct Option"
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            select
            fullWidth
            margin="normal"
          >
            {['a', 'b', 'c', 'd'].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField> */}
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Add Question
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
