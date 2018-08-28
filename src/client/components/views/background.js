import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: theme.typography
});

class Background extends React.Component {

  render() {
    <div>
      <h2>Background</h2>
      <p class="lead">Drug adverse events are side effects experienced by a
      consumer of a drug. Healthcare professionals, consumers and
      manufacturers submit reports to the FDA or drug manufacturer as
      unstructured notes when a drug consumer is experiencing complications
      from one or more drugs. The drug manufacturer must then code the
      report for side effects. The drug manufacturer may then update the
      drug product label for consumer use.</p>

      <br/>
      <br/>
      This demo uses an entity extraction model trained with the Python spacy library to reduce the time spent manufacturers code adverse event reports. For more details visit this blog post describing the app
      <br/>
      <div class="text-center">  
        <button class="btn btn-primary" onclick="window.location.href='https://ezbc.me/2018/08/07/drug-adverse-event-entity-extraction'">Visit Blog Post</button>
      </div>
    </div>
  }
}

export default withStyles(styles)(Background);
