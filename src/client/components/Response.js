import {
  Paper,
  Card,
  CardContent,
  CardHeader,
  Typography
} from '@material-ui/core'
import React from 'react';
import AnnotatedText from './AnnotatedText/AnnotatedText';
import PlainText from './PlainText/PlainText';

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
