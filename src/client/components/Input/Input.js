import React from 'react'
import {
  Paper,
  Typography,
  TextField,
  Button,
  Card,
  CardContent
} from '@material-ui/core'

import './Input.css';

const InputField = (props) => (
  <Card
    className="input-card" 
  >
    <CardContent>
      <form onSubmit={props.handleFormSubmit}>
        <TextField
          name='title'
          label='Adverse Event Description'
          value={props.input}
          placeholder={props.placeholder}
          onChange={props.handleFormChange}
          margin='normal' 
          multiline={true}
          rows={10}
          fullWidth={true}
        />
        <br/>
        <Button
          type='submit'
          color='secondary'
          variant='raised' 
        >
          Submit 
        </Button>
      </form>
    </CardContent>
  </Card>
);

export default InputField
