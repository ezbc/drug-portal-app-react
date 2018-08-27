import {
  Paper,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import React from 'react';
import AnnotatedText from './AnnotatedText/AnnotatedText';

function createBlocks(annotations) {
  return annotations.map(function(block, index) {
    if (block.label) {
      return (<AnnotatedText
          label={block.label}
          text={block.text}
          annotationText={block.class}
        />)
    } else {
      return (<span>{ block.text }</span>)
    }
  })
}

const Response = (props) => (
  <div>
    { props.annotations && 
      <Card>
        <CardHeader
          title='Results'
        />
        <CardContent>
          { createBlocks(props.annotations) }
        </CardContent>
      </Card>
    }
  </div>
)

export default Response;
