import React, { useEffect, useState } from 'react';
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
  CardContent,
  ThemeProvider
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
    const [semesters, setSemesters] = useState<{ id: number; name: string }[]>([]);
    const [currentAcademicYear, setCurrentAcademicYear] = useState('2122');
    const [currentSemester, setCurrentSemester] = useState(1);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
      useEffect(() => {
        // Initialize with the first semester if no semesters exist
        if (semesters.length === 0) {
          addSemester();
        }
      }, []);

      const generateNextSemesterName = () => {
        let year = currentAcademicYear;
        let semester = currentSemester;
        console.log("acadyear" + currentAcademicYear + "+" + currentSemester)
    
        if (semester === 2) {
          const nextYear = parseInt(year.slice(2)) + 1;
          const currYear = parseInt(year.slice(2));
          year = `${currYear}${nextYear}`;
          semester = 1;
        } else {
          semester++;
        }
    
        setCurrentAcademicYear(year);
        setCurrentSemester(semester);
    
        return `AY${year}_S${semester}`;
      };

  const addSemester = () => {
    const newSemesterName = generateNextSemesterName();
    const newSemester = {
      id: semesters.length + 1,
      name: newSemesterName,
    };
    setSemesters([...semesters, newSemester]);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth:'50%'}}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
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
          semester={semester.name}
        />
      ))}

      {/* ... Summary Card */}
    </Box>
  );
};

export default CourseOverview;