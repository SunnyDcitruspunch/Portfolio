import React, { Component, Fragment, ReactElement } from 'react'
import './style.scss'

class Home extends Component {
  componentDidMount(): void {
    window.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener('wheel', this.handleScroll);
  }

  render(): ReactElement {
    return (
      <Fragment>
        <section id='welcome' className='show'>
          <h1 className='kanit-black'>Hi. Welcome :)</h1>
        </section>
        <section id='about-me' className='hidden'>
          <h1 className='kanit-black'>About Me</h1>
        </section>
      </Fragment>
    )
  }

  handleScroll = (): void => {
    const welcome = document.getElementById('welcome')
    const aboutMe = document.getElementById('about-me')

    if (welcome && aboutMe) {
      const windowHeight = window.innerHeight;
      const elements = [welcome, aboutMe]

      elements.forEach((element: HTMLElement) => {
        const elementBounds = element.getBoundingClientRect()

        if (elementBounds.top < windowHeight / 3 && elementBounds.bottom > windowHeight / 3) {
          element.classList.add('show');
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
          element.classList.remove('show');
        }
      })
    }
  };
}

export default Home 