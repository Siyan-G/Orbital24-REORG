import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { 
  Box, List, ListItem, ListItemButton, ListItemText, Typography, Paper, 
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,
  Grid
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import theme from '../../../styles/MainTheme';
import axios from 'axios';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3498db',
//     },
//   },
// });

interface JournalEntry {
  date: string;
  title: string;
  content: string;
}

const JournalPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([
    { date: '2024-04-03', title: 'I am so tired of whales', content: '...' },
    { date: '2024-04-02', title: 'Loomings', content: 'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world...' },
    // Add more entries for demonstration
    { date: '2024-04-01', title: 'Entry 3', content: 'Content 3' },
    { date: '2024-03-31', title: 'Entry 4', content: 'Content 4' },
    { date: '2024-03-30', title: 'Entry 5', content: 'Content 5' },
  ]).sort();
  const [isNewEntryDialogOpen, setIsNewEntryDialogOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<JournalEntry>({ date: '', title: '', content: '' });

  const today = new Date().toISOString().split('T')[0];

  const handleTodayClick = () => {
    setSelectedDate(today);
  };

  const handleNewJournalClick = () => {
    setIsNewEntryDialogOpen(true);
  };

  const handleShowAllClick = () => {
    setSelectedDate(null);
  };

  const handleCloseDialog = () => {
    setIsNewEntryDialogOpen(false);
    setNewEntry({ date: '', title: '', content: '' });
  };

  const handleSaveNewEntry = async () => {
    try {
    await axios.post('http://localhost:8083/api/journal', newEntry);
    const updatedEntries = [...entries, newEntry];
    updatedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setEntries(updatedEntries);
    handleCloseDialog();
    } catch (error) {
        console.error('Error saving journal entry:', error);
        };
    };
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', height: '100vh', width: '70%' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }} >
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{today}</Typography >
            </Box>
          <Grid container spacing={2}>
            {entries
              .filter(entry => !selectedDate || entry.date === selectedDate)
              .map((entry, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 2, 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      backgroundColor: index === 0 ? theme.palette.secondary.main : 'white', 
                      color: index === 0 ? 'white' : 'inherit'
                    }}
                  >
                    <Typography variant="h6">{entry.date.split('-')[1] + "-" + entry.date.split('-')[2]}</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{entry.title}</Typography>
                    <Typography sx={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {entry.content}
                    </Typography>
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
        </Box>
        <Box sx={{ width: '30%', borderLeft: 1, borderColor: 'divider' }}>
          <List>
          <ListItem>
              <ListItemButton onClick={handleShowAllClick}>
                <CalendarMonthIcon />
                <ListItemText primary="Show All Entries" primaryTypographyProps={{style: {fontWeight: 500, color: '#9395b2'}}}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleTodayClick}>
                <CalendarTodayIcon />
                <ListItemText primary="Today" primaryTypographyProps={{style: {fontWeight: 500, color: '#9395b2'}}}/>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleNewJournalClick}>
                <AddIcon/>
                <ListItemText primary="New Journal" primaryTypographyProps={{style: {fontWeight: 500, color: '#9395b2'}}}/>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Dialog open={isNewEntryDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>New Journal Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            // label="Date"
            type="date"
            fullWidth
            value={newEntry.date}
            onChange={(e) => setNewEntry({ ...newEntry, date: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={newEntry.title}
            onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Content"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={newEntry.content}
            onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveNewEntry}>Save</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default JournalPage;