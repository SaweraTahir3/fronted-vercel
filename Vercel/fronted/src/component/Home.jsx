import React from 'react';
import {
  BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill
} from 'react-icons/bs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';
import '../App.css';

function Home() {

  const data = [
    { name: 'Student A', uv: 90, pv: 80, amt: 85 },
    { name: 'Student B', uv: 85, pv: 70, amt: 80 },
    { name: 'Student C', uv: 75, pv: 65, amt: 70 },
    { name: 'Student D', uv: 70, pv: 60, amt: 65 },
    { name: 'Student E', uv: 95, pv: 90, amt: 92 },
    { name: 'Student F', uv: 80, pv: 75, amt: 78 },
  ];

  return (
    <main className='main-container margin'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>STUDENTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>QUESTIONS</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>120</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>RESULTS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <div>
          <h3>Top 5 Students</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#0D6DB7" />
              <Bar dataKey="uv" fill="#8DC63F" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3>Student Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#0D6DB7" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#8DC63F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;

