import React from 'react'
import {
  Paper,
  Typography,
  TextField,
  Button,
  Card,
  CardContent
} from '@material-ui/core'

const InputField = (props) => (
  <Card>
    <CardContent>
      <form onSubmit={props.handleFormSubmit}>
        <TextField
          name='title'
          label='Adverse Event Description'
          value={props.input}
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
