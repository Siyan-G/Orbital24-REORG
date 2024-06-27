import React, { useState } from 'react';
import {
  Card,
  Stack,
  Typography,
  CardActions,
  Collapse,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

interface Course {
  code: string;
  name: string;
  grade: string;
  gpa: string;
}

interface SemesterCardProps {
  name: string;
  courses: Course[];
}

const SemesterCard: React.FC<SemesterCardProps> = ({ name, courses }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ mb: 2 }}>
      <Stack
        sx={{ backgroundColor: '#e8eaf6', p: 2 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">{name}</Typography>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Course</strong></TableCell>
                <TableCell align="right"><strong>Grade</strong></TableCell>
                <TableCell align="right"><strong>GPA</strong></TableCell>
                <TableCell align="right"><IconButton><AddIcon/></IconButton></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.code}>
                  <TableCell>{course.code} {course.name}</TableCell>
                  <TableCell align="right">{course.grade}</TableCell>
                  <TableCell align="right">{course.gpa}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Card>
  );
};

export default SemesterCard;