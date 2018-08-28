import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => {};

const NavBar = (props) => {

  return(
      <div>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="title" color="inherit">
              {props.title}
              </Typography>
          </Toolbar>
      </AppBar>

      </div>
  )
}

NavBar.defaultProps = {
  title: 'Drug Portal'
};

export default withStyles(styles)(NavBar);
