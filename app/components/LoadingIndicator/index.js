import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    width: '100%',
    height: theme.spacing(20),
    textAlign: 'center',
  },
  indicator: {
    marginTop: theme.spacing(6),
  },
}));

const LoadingIndicator = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress className={classes.indicator} />
    </div>
  );
};

export default LoadingIndicator;
