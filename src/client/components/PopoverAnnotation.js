import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { 
  Paper,
  Card,
  CardContent,
  CardHeader,
  Popover
} from '@material-ui/core';

const PopoverAnnotation = (props) => (
  <Card>
    <CardHeader
      title={props.title}
    />
    <CardContent>
      Popover text
    </CardContent>
  </Card>
)

PopoverAnnotation.defaultProps = {
  'title': 'Annotation'
};

export default PopoverAnnotation;
