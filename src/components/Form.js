import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TweetContext } from './TweetProvider.js';

function Form() {
  const contextVal = useContext(TweetContext);

  const [searchTermState, setSearchTerm] = useState('');

  const inputChangeHandler = (ev) => {
    setSearchTerm(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    setSearchTerm('');
    contextVal.fetchTweets(searchTermState);
  };

  return (
    <form>
      <Grid container direction='column' spacing={3}>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Search term'
            variant='outlined'
            fullWidth
            name='searchTermState'
            value={searchTermState}
            onChange={(ev) => inputChangeHandler(ev)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant='contained'
            color='primary'
            type='button'
            onClick={(ev) => handleFormSubmit(ev)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
