import React, { Component, ReactElement } from 'react'
import './style.scss'

const DEBOUNCE_DURATION = 10

class Home extends Component {
  private debounceTimeOut: NodeJS.Timeout | null

  constructor(props: any) {
    super(props)

    this.debounceTimeOut = null
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleScroll);
  }

  render(): ReactElement {
    return (
      <div className='home'>
        <div id='welcome' className='show'>
          <h1 className='kanit-black'>Hi. Welcome :)</h1>
        </div>
        <div className='right-columns'>
          <div id='about-me' className='hidden purple-background'>
            <h1 className='kanit-black'>About Me 2</h1>
          </div>
          <div id='experience' className='hidden yellow-background'>
            <h1 className='kanit-black'>Experience</h1>
          </div>
          <div id='projects' className='hidden purple-background'>
            <h1 className='kanit-black'>Projects / Work</h1>
          </div>
        </div>
      </div>
    )
  }

  handleScroll = (event: WheelEvent): void => {
    const { deltaY } = event;
    const isScrollingToShowNextPage = deltaY > 0;

    const experience = document.getElementById('experience');
    const projects = document.getElementById('projects');
    clearTimeout(this.debounceTimeOut as any);

    this.debounceTimeOut = setTimeout(() => {
      if (experience && projects) {
        if (isScrollingToShowNextPage) {
          this.handleShowNextPage()
        } else if (!isScrollingToShowNextPage) {
          this.handleShowPrevPage()
        }
      }
    }, DEBOUNCE_DURATION)
  };

  handleShowNextPage = (): void => {
    const experience = document.getElementById('experience')!;
    const projects = document.getElementById('projects')!;

    if (this.isCurrentlyShowingExperienceTab()) {
      projects.classList.remove('hidden');
    } else {
      experience.classList.remove('hidden');
    }
  }

  isCurrentlyShowingExperienceTab = (): boolean => {
    const experience = document.getElementById('experience')!;
    const projects = document.getElementById('projects')!;

    return experience.getBoundingClientRect().top === 0 && Array.from(projects.classList).includes('hidden')
  }

  isCurrentShowingProjectsTab = (): boolean => {
    const experience = document.getElementById('experience')!;
    const projects = document.getElementById('projects')!;

    return experience.getBoundingClientRect().top === 0 && projects.getBoundingClientRect().top === 0
  }

  handleShowPrevPage = (): void => {
    const experience = document.getElementById('experience')!;
    const projects = document.getElementById('projects')!;

    if (this.isCurrentShowingProjectsTab()) {
      projects.classList.add('hidden');
    } else if (this.isCurrentlyShowingExperienceTab()) {
      experience.classList.add('hidden');
    }
  }
}

export default Home 
