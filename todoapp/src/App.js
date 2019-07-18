import React from 'react';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>hello</h1>
      <h2 className="centet">center?</h2>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
    
  );
}

export default App;
