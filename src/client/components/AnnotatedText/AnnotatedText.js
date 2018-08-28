import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import { ButtonBase, Paper, Card, CardContent, Tooltip } from '@material-ui/core';
import PopoverAnnotation from '../PopoverAnnotation/PopoverAnnotation'
import './AnnotatedText.css';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2
  },
  root: {
    fontFamily: theme.typography.body,
  }
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
    const { key } = this.props;

    return (
      <span className={this.props.classes.root}>
        <span
          onClick={this.handleClick}
          key={this.props.key}
          className={"highlight highlight-" + this.props.highlightName }
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
          key={this.props.key}
        >
          <PopoverAnnotation
            title={label}
            key={this.props.key}
            entity={text}
          >
            { annotationText }
          </PopoverAnnotation>
          
        </Popover>
      </span>
    );
  }
}

AnnotatedText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AnnotatedText);
