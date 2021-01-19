import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function Form() {
  return (
    <form>
      <Grid container direction='column' spacing={3}>
        <Grid item xs={12}>
          <TextField
            id='outlined-basic'
            label='Search term'
            variant='outlined'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant='contained'
            color='primary'
            type='button'
            // onClick={(ev) => this.handleFormSubmit(ev)}
            // disabled={!this.state.isFormValid}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
