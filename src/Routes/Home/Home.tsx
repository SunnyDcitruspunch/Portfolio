import React, { Component, ReactElement } from 'react'
import IHomePresenter from './Presenter/IHomePresenter'

type Props = {
  presenter: IHomePresenter
}

class Home extends Component<Props> {
  componentDidMount(): void {
    this.props.presenter.initialize()
    // this.props.presenter.animate()
  }

  render(): ReactElement {
    return (
      <div id='home'></div>
    )
  }
}

export default Home 