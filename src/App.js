import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Header from './components/Header.js';
import Form from './components/Form.js';
import { TweetProvider } from './components/TweetProvider.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  container: {
    marginTop: '50px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container} maxWidth='lg'>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <TweetProvider>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>DATA</Paper>
              </Grid>
            </TweetProvider>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
