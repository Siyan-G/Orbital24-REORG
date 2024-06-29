import { Card, Typography, Box } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
const Graph = () => {
    const [gpa, setGpa] = useState(0);
    const [modularUnits, setModularUnits] = useState(0);

    useEffect(() => {
        // API call for GPA
        console.log("called api")
        axios.get('http://localhost:8085/api/grade/GPA?email=test@email.com')
        .then(response => {
            console.log('GPA Response:', response.data); // Debug: Log the response
            setGpa(response.data.toFixed(2));
          })
          .catch(error => {
            console.error('Error fetching GPA:', error);
          });
      }, []);
    
      useEffect(() => {
        // API call for Modular Units
        console.log("called api")
        axios.get('http://localhost:8085/api/grade/Units?email=test@email.com')
            .then(response => {
            console.log('Modular Units Response:', response.data); // Debug: Log the response
            setModularUnits(response.data);
          })
          .catch(error => {
            console.error('Error fetching Modular Units:', error);
          });
      }, []);

        console.log('GPA:', gpa);
        console.log('Modular Units:', modularUnits);
  return (
    <Box>
    <Card sx={{ p: 2, backgroundColor: '#e8eaf6' }}>
        <Typography variant="h6" gutterBottom>Summary</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4">{gpa}</Typography>
            <Typography variant="body2">Current GPA</Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>{modularUnits}</Typography>
            <Typography variant="body2">Modular Units</Typography>
          </Box>
          <Box sx={{ width: '150px', height: '150px' }}>
            <PieChart
              data={[
                { title: 'Core', value: 80, color: '#3366cc' },
                { title: 'UE', value: 70, color: '#dc3912' },
                { title: 'GE', value: 50, color: '#ff9900' },
              ]}
              lineWidth={20}
              paddingAngle={5}
              rounded
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={(index) => ({
                fill: '#808080',
                fontSize: '5px',
                fontFamily: 'sans-serif',
              })}
              labelPosition={70}
            />
          </Box>
        </Box>
      </Card>
      <Box></Box>
      </Box>
  )
}

export default Graph