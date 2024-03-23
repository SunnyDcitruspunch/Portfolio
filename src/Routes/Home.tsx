import React, { Component, ReactElement } from 'react'
import './style.scss'

const THROTTLE_DURATION = 200;

class Home extends Component {
  private isThrottled: boolean;

  constructor(props: any) {
    super(props);

    this.isThrottled = false;
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this.handleScrollThrottle);
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleScrollThrottle);
  }

  render(): ReactElement {
    return (
      <div className='home'>
        <div id='welcome'>
          <div>
            <h1 className='kanit-black'>Hi. I'm Sunny!</h1>
            <p>Let's connect :))</p>
          </div>
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

  handleScrollThrottle = (event: WheelEvent): void => {
    const target = event.target as HTMLElement;

    if (target.parentElement?.className === 'right-columns') {
      if (!this.isThrottled) {
        this.isThrottled = true;

        setTimeout(() => {
          this.handleScroll(event);
          this.isThrottled = false;
        }, THROTTLE_DURATION);
      }
    }
  };

  handleScroll = (event: WheelEvent): void => {
    const { deltaY } = event;
    const isScrollingToShowNextPage = deltaY > 0;

    const experience = document.getElementById('experience');
    const projects = document.getElementById('projects');

    if (experience && projects) {
      if (isScrollingToShowNextPage) {
        this.handleShowNextPage();
      } else {
        this.handleShowPrevPage();
      }
    }
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
