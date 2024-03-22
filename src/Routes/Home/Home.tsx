import React, { Component, ReactElement } from 'react'
import IHomePresenter from './Presenter/IHomePresenter'
import './style.scss'

type Props = {
  presenter: IHomePresenter
}

class Home extends Component<Props> {
  componentDidMount(): void {
  }

  render(): ReactElement {
    return (
      <div id='home'>
        <h1 className='kanit-black'>Hi. Welcome :)</h1>
      </div>
    )
  }
}

export default Home 