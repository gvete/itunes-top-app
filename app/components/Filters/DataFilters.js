import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Menu, MenuItem, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { searchResults, sortResults } from '../../actions/appActions';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  pcFilter: {
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  mobileFilter: {
    display: 'none',
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
    },
  },
  sortBox: {
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  filterText: {
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  mobileBase: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function DataFilters() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { sortBy, query } = useSelector(state => state.apps);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = event => {
    dispatch(searchResults(event.target.value));
  };

  const handleSort = param => {
    dispatch(sortResults(param));
    handleClose();
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={9}>
        <div className={classes.pcFilter}>
          <Typography variant="body1" className={classes.filterText}>
            Search:
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Filter by app name"
            value={query}
            onChange={handleSearch}
          />
        </div>
        <div className={classes.mobileFilter}>
          <Paper component="form" className={classes.mobileBase}>
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="Filter by app name"
              inputProps={{ 'aria-label': 'Filter by app name' }}
              value={query}
              onChange={handleSearch}
            />
          </Paper>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div className={classes.sortBox}>
          <Typography variant="body1" className={classes.filterText}>
            Sort:
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="outlined"
            endIcon={<ExpandMoreIcon />}
          >
            {sortBy}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSort('Date')}>Date</MenuItem>
            <MenuItem onClick={() => handleSort('Price')}>Price</MenuItem>
            <MenuItem onClick={() => handleSort('Name')}>Name</MenuItem>
            <MenuItem onClick={() => handleSort('Category')}>Category</MenuItem>
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
}
