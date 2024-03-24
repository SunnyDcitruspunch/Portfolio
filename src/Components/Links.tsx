import React, { Component, ReactElement } from 'react'
import './style.scss'
import images from '../Commons/images'
class Links extends Component {
  render(): ReactElement {
    return (
      <div className='icons'>
        <a
          href='https://www.linkedin.com/in/yangsunnyd/'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'>
          <img alt='linkedin' src={images.linkedIn} />
        </a>
        <a
          href='https://github.com/SunnyDcitruspunch'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'>
          <img alt='github' src={images.github} />
        </a>
        <a
          href='https://drive.google.com/file/d/1F39xSizev-3xggI8pOXwRtLko-_RgKRT/view?usp=drive_link'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'>
          <img alt='resume' src={images.downloadIcon} />
        </a>
      </div>
    )
  }
}

export default Links 