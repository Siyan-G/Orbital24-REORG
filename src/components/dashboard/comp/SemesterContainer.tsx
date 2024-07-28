import React, { useEffect, useState } from 'react';
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
  TextField,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

interface Course {
  email: string;
  courseCode: string;
  title: string;
  gradeLetter: string;
  gradePoint: string;
  semester: string;
}

interface CourseInputDTO {
    credit: number;
    email: string;
    courseCode: string;
    title: string;
    gradeLetter: string;
    type: string;
    semester: string;
}

interface SemesterCardProps {
  semester: string
}

const SemesterCard: React.FC<SemesterCardProps> = ({semester}) => {
  const user = localStorage.getItem("user")

  const [expanded, setExpanded] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<CourseInputDTO>({
    credit: 4.0,
    email: user||'',
    courseCode: '',
    title: '',
    gradeLetter: '',
    type: 'core',
    semester: semester,
  });
  const [editingCourse, setEditingCourse] = useState<string | null>(null);
  const [newGrade, setNewGrade] = useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetchSemesterData();
  }, [user, semester]);

  const fetchSemesterData = async () => {
    console.log("user "+ user)
    try {
      const response = await axios.get('http://localhost:8181/api/grade', {
        params: { email: user, sem: semester}
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching semester data:', error);
    }
  };

  const handleAddCourse = async () => {
    try {
      await axios.post('http://localhost:8181/api/grade', newCourse);
      fetchSemesterData();
      setNewCourse({
        ...newCourse,
        courseCode: '',
        title: '',
        gradeLetter: '',
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleUpdateGrade = async (courseCode: string) => {
    try {
      await axios.put('http://localhost:8181/api/grade/update', null, {
        params: { user, courseCode, newGrade }
      });
      fetchSemesterData();
      setEditingCourse(null);
      setNewGrade('');
    } catch (error) {
      console.error('Error updating grade:', error);
    }
  };

  console.log(courses);
  

  return (
    <Card sx={{ mb: 2 }}>
      <Stack
        sx={{ backgroundColor: '#e8eaf6', p: 2 }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">{semester}</Typography>
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
                <TableCell align="right"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.courseCode}>
                  <TableCell>{course.courseCode} {course.title}</TableCell>
                  <TableCell align="right">
                    {editingCourse === course.courseCode ? (
                      <TextField
                        value={newGrade}
                        onChange={(e) => setNewGrade(e.target.value)}
                        size="small"
                      />
                    ) : (
                      course.gradeLetter
                    )}
                  </TableCell>
                  <TableCell align="right">{course.gradePoint}</TableCell>
                  <TableCell align="right">
                    {editingCourse === course.courseCode ? (
                      <Button onClick={() => handleUpdateGrade(course.courseCode)}>Save</Button>
                    ) : (
                      <IconButton onClick={() => setEditingCourse(course.courseCode)}>
                        <EditIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell>
                  <TextField
                    label="Course Code"
                    value={newCourse.courseCode}
                    onChange={(e) => setNewCourse({...newCourse, courseCode: e.target.value})}
                    size="small"
                  />
                  <TextField
                    label="Course Name"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    label="Grade"
                    value={newCourse.gradeLetter}
                    onChange={(e) => setNewCourse({...newCourse, gradeLetter: e.target.value})}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={handleAddCourse}>
                    <AddIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Collapse>
    </Card>
  );
};

export default SemesterCard;