import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { Paper, Card, CardContent } from '@material-ui/core';
import PopoverAnnotation from '../PopoverAnnotation/PopoverAnnotation'

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class AnnotatedText extends React.Component {
  state = {
    anchorEl: null,
    label: null,
    text: null,
    annotationText: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { label } = this.props;
    const { text } = this.props;
    const { annotationText } = this.props;

    return (
      <div>
        <span
          onClick={this.handleClick}
        >
          {text}
        </span>
        <Popover
          className="PopoverAnnotation"
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <PopoverAnnotation
            title={label}
          >
            { annotationText }
          </PopoverAnnotation>
          
        </Popover>
      </div>
    );
  }
}

AnnotatedText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnotatedText);
