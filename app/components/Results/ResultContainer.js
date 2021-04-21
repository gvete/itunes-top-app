import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ResultRow from './ResultRow';

function ResultContainer() {
  const results = useSelector(state => state.apps.results);

  return (
    <Grid container spacing={2}>
      {results.map(app => (
        <ResultRow app={app} key={app.id} />
      ))}
    </Grid>
  );
}

export default ResultContainer;
