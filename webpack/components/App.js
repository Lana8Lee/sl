import React from 'react'

// components
import { AppContext } from './AppContext'
import Header from './Header'
import Main from './Main'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      language: 'en'
    }
  }

  toggleLanguage = () => {
    this.setState(state => ({
      language: ''
    }))
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <React.Fragment>
          <Header />
          <Main />
        </React.Fragment>
      </AppContext.Provider>
    )
  }
}

export default App
