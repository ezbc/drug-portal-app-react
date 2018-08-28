import {
  Paper,
  Card,
  CardContent,
  CardHeader,
  Typography
} from '@material-ui/core'
import React from 'react';
import AnnotatedText from '../AnnotatedText/AnnotatedText';
import PlainText from '../PlainText/PlainText';
import './Response.css';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.typography,
});

/** Create annotated text spans with popover modals.
 * 
 * @param {object} annotations 
 */
function createBlocks(annotations) {
  return annotations.map(function(block, i) {
    if (block.label) {
      return (
        <AnnotatedText
          label={block.label}
          text={block.text}
          highlightName={block.class}
          key={i}
        />
      )
    } else {
      return (
        <PlainText
          text={block.text} 
          key={i}
        />
      )
    }
  })
}

/** Create response card.
 * 
 * @param {object} props 
 */
const Response = (props) => (
  <div
    className={props.classes.root + ' response-card'}
  >
    { props && props.annotations && 
      <Card>
        <CardHeader
          title='Results'
        />
        <CardContent>
          { props.annotations &&
            createBlocks(props.annotations)
          }
        </CardContent>
      </Card>
    }
  </div>
)

export default withStyles(styles)(Response);
