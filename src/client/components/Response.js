import {
  Paper,
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core'
import React from 'react';

const Response = (props) => (
  <div>
    { props.response && 
    <Card>
      <CardHeader
        title='Results'
      />
      <CardContent>
        {props.response}
      </CardContent>
    </Card>
  }
  </div>
)

export default Response;
