import {
  Card,
  CardContent,
  CardHeader,
  Grid
} from '@material-ui/core'
import React from 'react';
import AnnotatedText from '../AnnotatedText/AnnotatedText';
import PlainText from '../PlainText/PlainText';
import './Response.css';
import Legend from '../Legend/Legend';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.typography,
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  response: {
    marginTop: 10
  },
  cardLegend: {},
  cardResults: {
    maxWidth: 300
  }
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
    className={props.classes.root + ' response'}
  >
    { props && props.annotations && 
      <div>
        <Grid
          container
          spacing={16}
        >
          <Grid item>
            <Card
              className='card card-results'
            >
              <CardHeader
                title='Results'
              />
              <CardContent>
                { props.annotations &&
                  createBlocks(props.annotations)
                }
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Legend
              className='card card-legend'
            />
          </Grid>
        </Grid>
      </div>
    }
  </div>
)

export default withStyles(styles)(Response);
