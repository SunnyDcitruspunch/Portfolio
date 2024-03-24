import React, { Component, ReactElement } from 'react'
import './style.scss'

type Props = {
  isVisible: boolean
}

class AboutMe extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='about-me' className={`purple-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <h2 className='kanit-black'>About Me 2</h2>
      </div>
    )
  }
}

export default AboutMe 
