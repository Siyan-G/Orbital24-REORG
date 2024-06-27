import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography, 
  IconButton,
  Paper,
  IconButtonProps,
  styled,
  CardActions,
  Stack,
  Collapse,
  CardContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SemesterCard from './SemesterContainer';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const CourseOverview = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const [semesters, setSemesters] = useState([
    {
      id: 1,
      name: 'AY24/25 Sem 1',
      courses: [
        { id: 1, code: 'CS2100', name: 'Computer Organisation', grade: '-', gpa: '-' },
        { id: 2, code: 'CS2103T', name: 'Software Engineering', grade: '-', gpa: '-' },
        { id: 3, code: 'CS2102', name: 'Database Systems', grade: '-', gpa: '-' },
        { id: 4, code: 'CS2101', name: 'Communication', grade: '-', gpa: '-' },
      ]
    },
    {
      id: 2,
      name: 'AY23/24 Sem 2',
      courses: [
        { id: 1, code: 'CS2030S', name: 'Programming Methodology II', grade: 'A-', gpa: '4.5' },
        { id: 2, code: 'CS2040S', name: 'Data Structures and Algorithms', grade: 'B+', gpa: '4.0' },
        { id: 3, code: 'ST2334', name: 'Statistics and Probability', grade: 'A-', gpa: '4.5' },
        { id: 4, code: 'ES2660', name: 'Communication in Information', grade: 'B+', gpa: '4.0' },
      ]
    },
    // Add more semesters as needed
  ]);

  const addSemester = () => {
    const newSemester = {
      id: semesters.length + 1,
      name: `New Semester ${semesters.length + 1}`,
      courses: []
    };
    setSemesters([...semesters, newSemester]);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4">Course Overview</Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={addSemester}
        >
          Add Semester
        </Button>
      </Box>

      {semesters.map((semester) => (
        <SemesterCard 
          key={semester.id}
          name={semester.name}
          courses={semester.courses}
        />
      ))}

      {/* ... Summary Card */}
    </Box>
  );
};

export default CourseOverview;