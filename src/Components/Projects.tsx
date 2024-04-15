import React, { Component, ReactElement } from 'react'
import './style.scss'
import './projects.scss'
import images from '../Commons/images'

type Props = {
  isVisible: boolean
}

class Projects extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='projects' className={`purple-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <div>
          <h2 className='text-effect-light kanit-black'>Projects / Work</h2>
        </div>
        <div className='project-grids'>
          <a href='https://www.iva-corp.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project flip-card'>
              <div className="flip-card-inner">
                <img className='flip-card-front' src={images.ivaCorpLogo} alt='iva-corp' />
                <p className='flip-card-back project-desc kanit-medium'>Company website built in React.js, TypeScript, and Scss.</p>
                <p className='mobile-desc kanit-medium'>Company website built in React.js, TypeScript, and Scss.</p>
              </div>
            </div>
          </a>
          <a href='https://dunder-mifflin-infinity-abe1c.web.app'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project flip-card'>
              <div className="flip-card-inner">
                <img className='flip-card-front' id='dunder-mifflin' src={images.dunderMifflinLogo} alt='dunder-mifflin' style={{ height: '100%' }} />
                <p className='flip-card-back project-desc kanit-medium'>Dunder Mifflin Infinity in Windows xp simulator env built in Vue.</p>
              </div>
            </div>
          </a>
          <a href='https://www.product.databased.com/ssologins'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project flip-card'>
              <div className="flip-card-inner">
                <img className='flip-card-front' src={images.databasedLogo} alt='databased' />
                <p className='flip-card-back project-desc kanit-medium'>Recruiting platform built in React.js, TypeScript, and Scss.</p>
                <p className='mobile-desc kanit-medium'>Recruiting platform built in React.js, TypeScript, and Scss.</p>
              </div>
            </div>
          </a>
          <a href='https://www.behaviorspan.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project flip-card'>
              <div className="flip-card-inner">
                <img className='flip-card-front' id='behavior-span' src={images.behaviorSpanLogo} alt='behavior-span' />
                <p className='flip-card-back project-desc kanit-medium'>Company admin portal built in React.js and TypeScript.</p>
                <p className='mobile-desc kanit-medium'>Company admin portal built in React.js and TypeScript.</p>
              </div>
            </div>
          </a>
        </div>
      </div >
    )
  }
}

export default Projects 
