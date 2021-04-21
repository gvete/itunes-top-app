import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { sortResults } from '../../actions/appActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    display: 'none',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
    },
  },
  header: {
    display: 'block',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
    paddingTop: theme.spacing(4),
    paddingDown: theme.spacing(4),
    textAlign: 'center',
  },
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { sortBy } = useSelector(state => state.apps);
  const [open, setOpen] = React.useState(false);

  const handleOpenSort = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSort = param => {
    dispatch(sortResults(param));
    handleClose();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button
            variant="contained"
            className={classes.menuButton}
            aria-label="sort"
            onClick={handleOpenSort}
          >
            Sort
          </Button>
          <Typography variant="h6" className={classes.title}>
            Top Paid
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.header}>
        <Container>
          <Typography variant="h5">iTunes Top Paid Applications</Typography>
        </Container>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Sort Apps By</DialogTitle>
        <List>
          <ListItem
            button
            onClick={() => handleSort('Date')}
            selected={sortBy === 'Date'}
          >
            <ListItemText primary="Date" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleSort('Price')}
            selected={sortBy === 'Price'}
          >
            <ListItemText primary="Price" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleSort('Name')}
            selected={sortBy === 'Name'}
          >
            <ListItemText primary="Name" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleSort('Category')}
            selected={sortBy === 'Category'}
          >
            <ListItemText primary="Category" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default Header;
