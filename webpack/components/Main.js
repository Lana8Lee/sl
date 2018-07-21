import React from 'react'
import PropTypes from 'prop-types'

//components
import { AppContext } from './AppContext'
import Img from './img/Img'
import Img2 from './img/Img2'
import Img3 from './img/Img3'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
   }

  render () {
    return (
      <main>
        <Img />
        <Img3 />
      </main>
    )
  }
}

export default props => (
  <AppContext.Consumer>
    { context => <Main {...props} />}
  </AppContext.Consumer>
)
