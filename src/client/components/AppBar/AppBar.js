import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from '@material-ui/core';

const styles = theme => ({
  appBar: {
    position: 'relative',
    },
    toolbarTitle: {
    flex: 1,
    },
});

const NavBar = (props) => {

  const { classes } = props;

  return(
    <div>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
            <Typography variant="title" color="inherit" noWrap className={classes.toolbarTitle}>
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
