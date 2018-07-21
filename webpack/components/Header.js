import React from 'react'
import PropTypes from 'prop-types'

//components
import { AppContext } from './AppContext'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
   }

  render () {
    return (
      <header>
        <div></div>
      </header>
    )
  }
}

export default props => (
  <AppContext.Consumer>
    { context => <Header {...props} />}
  </AppContext.Consumer>
)
