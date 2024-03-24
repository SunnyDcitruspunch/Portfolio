import React, { Component } from 'react';
import images from '../Commons/images';
import Projects from './Projects';
import Experience from './Experience';
import AboutMe from './AboutMe';
import './style.scss';

const MOBILE_BREAKPOINT = 600;
const THROTTLE_DURATION = 1000;
const TRANSITION_TIME = THROTTLE_DURATION * 2;

class Home extends Component {
  private isThrottled: boolean;
  private startY: number;

  state = {
    isIntroVisible: window.innerWidth <= MOBILE_BREAKPOINT ? true : false,
    isExperienceVisible: false,
    isProjectsVisible: false,
    isAboutMeVisible: window.innerWidth <= MOBILE_BREAKPOINT ? false : true,
    isTransitioning: false,
  };

  constructor(props: any) {
    super(props);

    this.isThrottled = false;
    this.startY = 0;
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScrollEvent);
    window.addEventListener('touchstart', this.handleTouchStart, { passive: true });
    window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScrollEvent);
    window.removeEventListener('touchstart', this.handleTouchStart);
    window.removeEventListener('touchmove', this.handleTouchMove);
  }

  render(): React.ReactElement {
    const { isExperienceVisible, isIntroVisible, isProjectsVisible, isAboutMeVisible } = this.state;

    return (
      <div className='home'>
        <div id='welcome'>
          <div className='name-wrapper'>
            <div>
              <div className='kanit-regular home-name'>Hi. I'm
                <p>Sunny!</p>
              </div>
              <div className='center-text'>
                <p className='kanit-regular home-connect'>Let's connect!</p>
              </div>
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
          <div id='intro' className={`yellow-background ${isIntroVisible ? '' : 'hidden'}`}>
            <div className='name-wrapper'>
              <div>
                <h1 className='kanit-regular home-name center-text'>Hi. I'm Sunny!</h1>
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
          <AboutMe isVisible={isAboutMeVisible} />
          <Experience isVisible={isExperienceVisible} />
          <Projects isVisible={isProjectsVisible} />
        </div>
      </div >
    )
  }

  handleTouchStart = (event: TouchEvent): void => {
    this.startY = event.touches[0].clientY;
  };

  handleTouchMove = (event: TouchEvent): void => {
    if (!this.isThrottled && !this.state.isTransitioning && event.cancelable) {
      const moveEndY = event.changedTouches[0].clientY;
      const deltaY = this.startY - moveEndY;

      if (Math.abs(deltaY) > 10) {
        this.isThrottled = true;
        if (deltaY > 0) {
          this.handleShowNextPage();
        } else {
          this.handleShowPrevPage();
        }

        setTimeout(() => {
          this.isThrottled = false;
        }, THROTTLE_DURATION);

        event.preventDefault();
      }
    }
  };

  handleScrollEvent = (event: WheelEvent): void => {
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

    if (target?.parentElement && target.parentElement?.className === 'right-columns') {
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
    if (this.isCurrentShowingIntroTab()) {
      this.setState({ isAboutMeVisible: true });
    } else if (this.isCurrentlyShowingExperienceTab()) {
      this.setState({ isProjectsVisible: true });
      return
    } else if (this.isCurrentShowingAboutMeTab()) {
      this.setState({ isExperienceVisible: true });
      return
    }
  }

  handleShowPrevPage = (): void => {
    if (this.isCurrentShowingAboutMeTab() && window.innerWidth <= MOBILE_BREAKPOINT) {
      this.setState({ isAboutMeVisible: false });
    } else if (this.isCurrentShowingProjectsTab()) {
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

  isCurrentShowingIntroTab = (): boolean => {
    return this.state.isIntroVisible && !this.state.isAboutMeVisible;
  }

  isCurrentShowingAboutMeTab = (): boolean => {
    return this.state.isAboutMeVisible && !this.state.isExperienceVisible;
  }
}

export default Home;
