import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Input from './Input';
import Response from './Response';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { orange, green, grey } from '@material-ui/core/colors'
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[200], // same as '#FFCC80',
      main: grey[400], // same as orange[600]
      dark: grey[500],
      contrastText: 'rgb(0,0,0)'
    }
  },
  root: {
    margin: 20,
    maxWidth: 60,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    maxWidth: 600,
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
})

const styles = (theme) => console.log(theme) || {
  root: {
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    maxWidth: 600,
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
}

export default withStyles(styles)(
  class App extends React.Component {

    state = {
      text: '',
      response: null
    }

    handleFormChange = ({target: {name, value}}) => {
      this.setState((prevState) => ({
        text: value
      }))
    }

    handleFormSubmit = (e) => {
      e.preventDefault()

      axios.post("/api/evalText", {
          text: this.state.text
        })
      .then(res => this.setState({ response: res.data.annotations[0].text }));
    }

    render() {
      const subtitle = 'Put your life in the hands of a computer';

      return (
        <MuiThemeProvider theme={theme}>
          <NavBar/>
            <Input 
              value={this.state.text} 
              handleFormChange={this.handleFormChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          <Response
            response={this.state.response} 
          >
          </Response>
        </MuiThemeProvider>
      );
    }
  }
)