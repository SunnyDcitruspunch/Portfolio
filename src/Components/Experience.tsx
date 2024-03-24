import React, { Component, ReactElement } from 'react'
import './style.scss'

type Props = {
  isVisible: boolean
}

class Experience extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='experience' className={`yellow-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <h2 className='kanit-black'>Experience</h2>
      </div>
    )
  }
}

export default Experience 
