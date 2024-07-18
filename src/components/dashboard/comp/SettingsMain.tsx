import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Switch,
  Select,
  MenuItem,
  FormControlLabel,
  Link,
  Container,
  Paper,
  Grid,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const AccountSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeFormat, setTimeFormat] = useState('12h');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');

  return (
    <Box sx={{ flexGrow: 1, p: 3, maxWidth:'40%'}} justifyContent={'center'}>
    <Container>
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Account
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Profile picture</Typography>
            <Button variant="outlined" size="small">
              Choose file
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              no file selected
            </Typography>
            <Typography variant="caption" color="textSecondary">
              maximum image size is 1 MB
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" defaultValue="Peter Griffin" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Username" defaultValue="Peterdactyl2015" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" defaultValue="hello@designdrops.io" />
            <Typography variant="caption" color="error" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              Email not verified. <Link href="#" color="error" sx={{ ml: 1 }}>Verify now</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
              label="Dark Mode"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
              Time Format <InfoIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
            <Select
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="12h">12h (am/pm)</MenuItem>
              <MenuItem value="24h">24h</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center' }}>
              Date Format <InfoIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
            <Select
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
              fullWidth
              size="small"
            >
              <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
              <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
              <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant="text" color="primary" fullWidth>
              Logout
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link href="#" color="error">
              Delete my account
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </Box>
  );
};

export default AccountSettings;