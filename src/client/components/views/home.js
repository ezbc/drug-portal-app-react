import React from 'react';
import AppBar from '../AppBar/AppBar';
import Input from '../Input/Input';
import Response from '../Response/Response';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import axios from 'axios';
import { browserHistory } from 'react-router';

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
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
})

const styles = (theme) => console.log(theme) || {
  root: {
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
}

// placeholdert text for input form
const PLACEHOLDER_TEXT=`Beta-adrenergic agonist medicines may produce significant hypokalemia in some patients, possibly through intracellular shunting, which has the potential to produce adverse cardiovascular effects. The decrease in serum potassium is usually transient, not requiring supplementation. Beta-agonist medications may produce transient hyperglycemia in some patients. In clinical trials evaluating BREO ELLIPTA in subjects with COPD or asthma, there was no evidence of a treatment effect on serum glucose or potassium.`

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

      // use text submitted from form else use the placeholder text
      const text = this.state.text ? this.state.text : PLACEHOLDER_TEXT

      axios.post("/api/evalText", {
          text
        })
      .then(res => this.setState({ response: res.data }));
    }
    componentDidMount() {
      browserHistory.push('/');
    }
    render() {
      return (
        <MuiThemeProvider theme={theme} classes={this.props.classes}>
          <div class='app-content'>
            <AppBar styles={styles}/>
              <Input 
                value={this.state.text} 
                placeholder={PLACEHOLDER_TEXT}
                handleFormChange={this.handleFormChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            { this.state.response && 
              <Response
                annotations={this.state.response.annotations} 
              >
              </Response>
            }
          </div>
        </MuiThemeProvider>
      );
    }
  }
)
