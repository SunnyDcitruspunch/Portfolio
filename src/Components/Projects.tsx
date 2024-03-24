import React, { Component, ReactElement } from 'react'
import './style.scss'
import './projects.scss'

type Props = {
  isVisible: boolean
}

class Projects extends Component<Props> {
  render(): ReactElement {
    return (
      <div id='projects' className={`purple-background ${this.props.isVisible ? '' : 'hidden'}`}>
        <div>
          <h2 className='kanit-black'>Projects / Work</h2>
        </div>
        <div className='project-grids'>
          <a href='https://www.iva-corp.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project'>
              <p className='project-name kanit-regular'>IVA-CORP</p>
            </div>
          </a>
          <a href='https://www.product.databased.com/ssologins'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project'>
              <p className='project-name kanit-regular'>DataBased</p>
            </div>
          </a>
          <a href='https://www.behaviorspan.com/'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'>
            <div className='project'>
              <p className='project-name kanit-regular'>BehaviorSpan</p>
            </div>
          </a>
        </div>
      </div >
    )
  }
}

export default Projects 
