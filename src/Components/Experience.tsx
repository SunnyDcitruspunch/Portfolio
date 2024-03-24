import React, { Component, ReactElement } from 'react'
import './style.scss'

type Props = {
  isVisible: boolean
}

class Experience extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='experience' className={`yellow-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <p className='kanit-regular experience-title'>Let's connect! :)</p>
      </div>
    )
  }
}

export default Experience 
