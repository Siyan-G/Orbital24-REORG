import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { 
  Box, List, ListItem, ListItemButton, ListItemText, Typography, Paper, 
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,
  Grid, IconButton
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import theme from '../../../styles/MainTheme';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

interface JournalEntry {
    userEmail: string;
    date: string;
    title: string;
    body: string;
}

const JournalPage: React.FC = () => {
  const user = localStorage.getItem("user")
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [isNewEntryDialogOpen, setIsNewEntryDialogOpen] = useState(false);
  const [isEditEntryDialogOpen, setIsEditEntryDialogOpen] = useState(false);
  const [newEntry, setNewEntry] = useState<JournalEntry>({ userEmail: user ?? 'test@gmail.com', date: '', title: '', body: '' });
  const [editEntry, setEditEntry] = useState<JournalEntry>({ userEmail: user ?? 'test@gmail.com', date: '', title: '', body: '' });

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        // if (user) {
        if(true) {
          const response = await axios.get(`http://localhost:8181/api/journal?userEmail=${user}`);
          console.log('API Response:', response);
          console.log("user" + user)
          console.log("local" + localStorage.getItem("user"))

          const fetchedEntries: JournalEntry[] = response.data || [];
          console.log('Fetched Entries:', fetchedEntries);

          fetchedEntries.sort((a: JournalEntry, b: JournalEntry) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setEntries(fetchedEntries);
        }
      } catch (error) {
        console.error('Error fetching journal entries:', error);
        setEntries([]);
      }
    };

    fetchEntries();
  }, [user]);

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
    setIsEditEntryDialogOpen(false);
    setNewEntry({ userEmail: user ?? '', date: '', title: '', body: '' });
    setEditEntry({ userEmail: user ?? '', date: '', title: '', body: '' });
  };

  const handleSaveNewEntry = async () => {
    try {
      await axios.post('http://localhost:8181/api/journal', newEntry);
      const updatedEntries = [...entries, newEntry];
      updatedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setEntries(updatedEntries);
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  const handleEditClick = (entry: JournalEntry) => {
    setEditEntry(entry);
    setIsEditEntryDialogOpen(true);
  };

  const handleSaveEditEntry = async () => {
    try {
      if (editEntry) {
        await axios.put(`http://localhost:8181/api/journal/update`, editEntry);
        const updatedEntries = entries.map(e => e.date === editEntry.date ? editEntry : e);
        updatedEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setEntries(updatedEntries);
        handleCloseDialog();
      }
    } catch (error) {
      console.error('Error updating journal entry:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', height: '100vh', width: '70%' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>{today}</Typography>
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
                      {entry.body}
                    </Typography>
                    <IconButton 
                      onClick={() => handleEditClick(entry)} 
                      sx={{ alignSelf: 'flex-end', color: index === 0 ? 'white' : 'inherit' }}
                    >
                      <EditIcon />
                    </IconButton>
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
                <ListItemText primary="Show All Entries" primaryTypographyProps={{ style: { fontWeight: 500, color: '#9395b2' }}} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleTodayClick}>
                <CalendarTodayIcon />
                <ListItemText primary="Today" primaryTypographyProps={{ style: { fontWeight: 500, color: '#9395b2' }}} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={handleNewJournalClick}>
                <AddIcon />
                <ListItemText primary="New Journal" primaryTypographyProps={{ style: { fontWeight: 500, color: '#9395b2' }}} />
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
            value={newEntry.body}
            onChange={(e) => setNewEntry({ ...newEntry, body: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveNewEntry}>Save</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isEditEntryDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Edit Journal Entry</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="date"
            fullWidth
            value={editEntry?.date}
            onChange={(e) => setEditEntry({ ...editEntry, date: e.target.value })}
            
          />
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={editEntry?.title}
            onChange={(e) => setEditEntry({ ...editEntry, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Content"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={editEntry?.body}
            onChange={(e) => setEditEntry({ ...editEntry, body: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveEditEntry}>Save</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default JournalPage;
