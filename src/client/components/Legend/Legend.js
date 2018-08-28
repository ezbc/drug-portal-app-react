import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import '../AnnotatedText/AnnotatedText.css';
import './Legend.css';

const styles = theme => ({
  root: theme.typography,
});

const Legend = (props) => (
  <Card>
    <CardHeader
      title='Legend' 
    />
    <CardContent>
      <div classNames={props.classes.root + ' legend'}>
        <div class='legend-scale'>
          <ul class='legend-labels'>
            <li><span class='highlight-adversereaction'></span>Adverse Reaction</li>
            <li><span class='highlight-drugclass'></span>Drug Class</li>
            <li><span class='highlight-factor'></span>Factor</li>
            <li><span class='highlight-negation'></span>Negation</li>
            <li><span class='highlight-severity'></span>Severity</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
)

export default withStyles(styles)(Legend);
