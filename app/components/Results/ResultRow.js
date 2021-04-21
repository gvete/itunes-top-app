import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    border: '1px solid #ddd',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
  },
  appName: {
    fontSize: theme.spacing(2),
  },
  categoryName: {
    color: '#555',
  },
  cover: {
    width: 80,
    height: 80,
    minWidth: 80,
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    margin: theme.spacing(2),
  },
}));

function ResultRow({ app }) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          className={classes.cover}
          image={app.image}
          title={app.title}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h6" className={classes.appName}>
              {app.title}
            </Typography>
            <Typography
              component="h5"
              variant="body2"
              className={classes.categoryName}
            >
              {app.category}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              ${app.price}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default ResultRow;
