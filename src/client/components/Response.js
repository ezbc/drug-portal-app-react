import {
  Paper,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import React from 'react';
import AnnotatedText from './AnnotatedText/AnnotatedText';

const label = 'Label'
const text = 'text'
const annotationText = 'anno text'

const Response = (props) => (
  <div>
    { props.response && 
      <Card>
        <CardHeader
          title='Results'
        />
        <CardContent>
          <AnnotatedText
            label={label}
            text={text}
            annotationText={annotationText}
          />
        </CardContent>
      </Card>
    }
  </div>
)

export default Response;
