import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [correct, setCorrect] = useState('');

  const handleAddQuestion = () => {
    axios.post('http://localhost:5000/api/v1/Students/add-question', { question, a, b, c, d, correct })
      .then(response => {
        alert('Question added successfully!');
       
        setQuestion('');
        setA('');
        setB('');
        setC('');
        setD('');
        setCorrect('');
      })
      .catch(error => console.error('Error adding question:', error));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Option A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Option B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Option C"
        value={c}
        onChange={(e) => setC(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Option D"
        value={d}
        onChange={(e) => setD(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correct Option"
        value={correct}
        onChange={(e) => setCorrect(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={handleAddQuestion}
        sx={{ mt: 2 }}
      >
        Add Question
      </Button>
    </Box>
  );
};

export default AddQuestion;
