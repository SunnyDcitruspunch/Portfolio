import React, { Component } from 'react';
import images from '../Commons/images';
import './style.scss';

const THROTTLE_DURATION = 700;
const TRANSITION_TIME = 1000;

class Home extends Component {
  private isThrottled: boolean;

  state = {
    isExperienceVisible: false,
    isProjectsVisible: false,
    isAboutMeVisible: true,
    isTransitioning: false
  };

  constructor(props: any) {
    super(props);

    this.isThrottled = false;
  }

  componentDidMount(): void {
    window.addEventListener('wheel', this.handleScrollEvent);
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleScrollEvent);
  }

  render(): React.ReactElement {
    const { isExperienceVisible, isProjectsVisible, isAboutMeVisible } = this.state;

    return (
      <div className='home'>
        <div id='welcome'>
          <div className='name-wrapper'>
            <div>
              <h1 className='kanit-regular home-name'>Hi. I'm Sunny!</h1>
              <div className='name-background' />
            </div>
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
            </div>
          </div>
        </div>
        <div className='right-columns'>
          <div id='about-me' className={`purple-background ${isAboutMeVisible ? '' : 'hidden'}`}>
            <h2 className='kanit-black'>About Me 2</h2>
          </div>
          <div id='experience' className={`yellow-background ${isExperienceVisible ? '' : 'hidden'}`}>
            <h2 className='kanit-black'>Experience</h2>
          </div>
          <div id='projects' className={`purple-background ${isProjectsVisible ? '' : 'hidden'}`}>
            <h2 className='kanit-black'>Projects / Work</h2>
          </div>
        </div>
      </div>
    )
  }

  handleScrollEvent = (event: WheelEvent) => {
    if (!this.isThrottled && !this.state.isTransitioning) {
      this.isThrottled = true;
      this.handleScroll(event);

      setTimeout(() => {
        this.isThrottled = false;
      }, THROTTLE_DURATION);
    }
  };

  handleScroll = (event: WheelEvent): void => {
    const target = event.target as HTMLElement

    if (target.parentElement?.className === 'right-columns') {
      this.setState({ isTransitioning: true });
      const { deltaY } = event;
      const isScrollingToShowNextPage = deltaY > 0;

      if (isScrollingToShowNextPage) {
        this.handleShowNextPage();
      } else {
        this.handleShowPrevPage();
      }

      setTimeout(() => {
        this.setState({ isTransitioning: false });
      }, TRANSITION_TIME);
    }
  };

  handleShowNextPage = (): void => {
    if (this.isCurrentlyShowingExperienceTab()) {
      this.setState({ isProjectsVisible: true });
      return
    } else if (this.isCurrentShowingAboutMeTab()) {
      this.setState({ isExperienceVisible: true });
      return
    }
  }

  handleShowPrevPage = (): void => {
    if (this.isCurrentShowingProjectsTab()) {
      this.setState({ isProjectsVisible: false });
      return
    } else if (this.isCurrentlyShowingExperienceTab()) {
      this.setState({ isExperienceVisible: false });
      return
    }
  }

  isCurrentlyShowingExperienceTab = (): boolean => {
    return this.state.isExperienceVisible && !this.state.isProjectsVisible;
  }

  isCurrentShowingProjectsTab = (): boolean => {
    return this.state.isProjectsVisible;
  }

  isCurrentShowingAboutMeTab = (): boolean => {
    return this.state.isAboutMeVisible && !this.state.isExperienceVisible;
  }
}

export default Home;
