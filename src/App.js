import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Header from './components/Header.js';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item xs={9} sm={4}>
              <TextField
                id='outlined-basic'
                label='Search term'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={3} sm={2}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
