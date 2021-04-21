import React from 'react';
import { Chart } from 'react-google-charts';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export default function Analytics() {
  const classes = useStyles();
  const data = useSelector(state => state.apps.pieData);

  return (
    <Paper variant="outlined" className={classes.root}>
      <Chart
        width="100%"
        height="300px"
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={data}
        rootProps={{ 'data-testid': '1' }}
      />
    </Paper>
  );
}
