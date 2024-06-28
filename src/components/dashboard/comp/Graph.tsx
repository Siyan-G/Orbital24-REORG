import { Card, Typography, Box } from '@mui/material'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
const Graph = () => {
  return (
    <Box>
    <Card sx={{ p: 2, backgroundColor: '#e8eaf6' }}>
        <Typography variant="h6" gutterBottom>Summary</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4">4.25</Typography>
            <Typography variant="body2">Current GPA</Typography>
            <Typography variant="h5" sx={{ mt: 2 }}>40</Typography>
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
                fill: '#fff',
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