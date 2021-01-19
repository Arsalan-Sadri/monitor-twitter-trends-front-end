import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    backgroundColor: theme.palette.info.main,
    color: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
  span: {
    fontSize: '4rem',
    lineHeight: '8vw',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <span className={classes.span}>Monitor Twitter Trends</span>
    </header>
  );
}

export default Header;
