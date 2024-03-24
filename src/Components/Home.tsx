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
    isSecondPageVisible: false,
    isThirdPageVisible: false,
    isFirstPageVisible: window.innerWidth <= MOBILE_BREAKPOINT ? false : true,
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

  // TODO: reorder pages: 1. projects (purple) 2. I am software engineer (yellow) 3. let's connect :) (purple)
  render(): React.ReactElement {
    const { isSecondPageVisible, isIntroVisible, isThirdPageVisible, isFirstPageVisible } = this.state;
    console.log('isSecondPageVisible, isThirdPageVisible, isFirstPageVisible ', isSecondPageVisible, isThirdPageVisible, isFirstPageVisible)

    return (
      <div className='home'>
        <div id='welcome'>
          <div className='name-wrapper'>
            <div>
              <h1 className='kanit-regular home-name'>Hi. I'm
                <p>Sunny Yang!</p>
              </h1>
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
          <AboutMe isVisible={isFirstPageVisible} />
          <Projects isVisible={isSecondPageVisible} />
          <Experience isVisible={isThirdPageVisible} />
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
    console.log('target ', target, target?.parentElement)

    if (target?.parentElement) {
      this.setState({ isTransitioning: true });
      const { deltaY } = event;
      const isScrollingToShowNextPage = deltaY > 0;

      if (isScrollingToShowNextPage) {
        console.log(100);

        this.handleShowNextPage();
      } else {
        console.log(200);
        this.handleShowPrevPage();
      }

      setTimeout(() => {
        this.setState({ isTransitioning: false });
      }, TRANSITION_TIME);
    }
  };

  handleShowNextPage = (): void => {
    console.log(5);

    if (this.isCurrentShowingIntro()) {
      console.log(0);

      this.setState({ isFirstPageVisible: true });
    } else if (this.isCurrentlyShowingSecondPage()) {
      console.log(1);
      this.setState({ isThirdPageVisible: true });
      return
    } else if (this.isCurrentShowingFirstPage()) {
      console.log(2);
      this.setState({ isSecondPageVisible: true });
      return
    }
  }

  handleShowPrevPage = (): void => {
    if (this.isCurrentShowingFirstPage() && window.innerWidth <= MOBILE_BREAKPOINT) {
      this.setState({ isFirstPageVisible: false });
    } else if (this.isCurrentShowingThirdPage()) {
      this.setState({ isThirdPageVisible: false });
      return
    } else if (this.isCurrentlyShowingSecondPage()) {
      this.setState({ isSecondPageVisible: false });
      return
    }
  }

  isCurrentlyShowingSecondPage = (): boolean => {
    return this.state.isSecondPageVisible && !this.state.isThirdPageVisible;
  }

  isCurrentShowingThirdPage = (): boolean => {
    return this.state.isThirdPageVisible;
  }

  isCurrentShowingIntro = (): boolean => {
    return this.state.isIntroVisible && !this.state.isFirstPageVisible;
  }

  isCurrentShowingFirstPage = (): boolean => {
    return this.state.isFirstPageVisible && !this.state.isSecondPageVisible;
  }
}

export default Home;
