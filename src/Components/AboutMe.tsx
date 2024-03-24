import React, { Component, ReactElement } from 'react'
import './style.scss'

type Props = {
  isVisible: boolean
}

class AboutMe extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='about-me' className={`yellow-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <h2 className='text-effect-dark kanit-black'>I'm a full stack software engineer</h2>
      </div>
    )
  }
}

export default AboutMe 
