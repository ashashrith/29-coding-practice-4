// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  clickMe = () => {
    this.state(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <p className="heading">
          The Button has Clicked <span className="span">{count} </span>
          times
        </p>
        <p className="para">Click the button to increase the count!</p>
        <button className="btn" onClick={this.clickMe}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
