import React, { Component, ReactElement } from 'react'
import './style.scss'

type Props = {
  isVisible: boolean
}

class Experience extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='experience' className={`yellow-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <h2 className='kanit-black experience-title text-effect-dark'>Let's connect!:)</h2>
        <h2 className='experience-icons'>💬🪄✨🎉</h2>
      </div>
    )
  }
}

export default Experience 
