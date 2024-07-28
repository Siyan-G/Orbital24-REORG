import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Button, 
  Typography,
  Paper,
  styled,
  IconButtonProps,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
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
    const [currentAcademicYear, setCurrentAcademicYear] = useState('2324');
    const [currentSemester, setCurrentSemester] = useState(0);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        // Load semesters from localStorage when the component mounts
        const storedSemesters = localStorage.getItem('semesters');
        if (storedSemesters) {
            const loadedSemesters = JSON.parse(storedSemesters);
            setSemesters(loadedSemesters);
            if (loadedSemesters.length > 0) {
                const lastSemester = loadedSemesters[loadedSemesters.length - 1];
                updateCurrentAcademicYearAndSemester(lastSemester.name);
            }
        } else {
            // Initialize with the first semester if no semesters exist
            addSemester();
        }
    }, []);

    const generateNextSemesterName = () => {
        let year = currentAcademicYear;
        let semester = currentSemester;

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

    const generatePreviousSemesterName = () => {
        let year = currentAcademicYear;
        let semester = currentSemester;

        if (semester === 1) {
            const prevYear = parseInt(year.slice(0, 2)) - 1;
            year = `${prevYear}${prevYear + 1}`;
            semester = 2;
        } else {
            semester--;
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
        const updatedSemesters = [...semesters, newSemester];
        setSemesters(updatedSemesters);
        // Save the updated semesters to localStorage
        localStorage.setItem('semesters', JSON.stringify(updatedSemesters));
    };

    const removeLatestSemester = () => {
        if (semesters.length === 0) return;

        const updatedSemesters = semesters.slice(0, -1); // Remove the last item
        const lastSemesterName = semesters[semesters.length - 1].name;
        setSemesters(updatedSemesters);

        // Update currentAcademicYear and currentSemester based on the remaining semesters
        if (updatedSemesters.length > 0) {
            const previousSemesterName = generatePreviousSemesterName();
            updateCurrentAcademicYearAndSemester(previousSemesterName);
        } else {
            // Reset to initial state if no semesters left
            setCurrentAcademicYear('2324');
            setCurrentSemester(1);
        }

        // Save the updated semesters to localStorage
        localStorage.setItem('semesters', JSON.stringify(updatedSemesters));
    };

    const updateCurrentAcademicYearAndSemester = (semesterName: string) => {
        const match = semesterName.match(/AY(\d{2})(\d{2})_S(\d+)/);
        if (match) {
            const year = `${match[1]}${parseInt(match[1]) + 1}`;
            const semester = parseInt(match[3]);
            setCurrentAcademicYear(year);
            setCurrentSemester(semester);
        }
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
                <Button 
                    variant="outlined" 
                    color="error" 
                    startIcon={<DeleteIcon />}
                    onClick={removeLatestSemester}
                    sx={{ ml: 2 }}
                >
                    Remove Latest
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
