import React from 'react'

import { Link } from 'react-router-dom'
import Header from './header'
import Icon from './icon'
import Title from './title'

/*
<HeaderBar navLeft="/" iconLeft="ion-chevron-left" navRight="/search" iconRight="ion-search" title="Top Flix" />

*/
export default props => {
  return (
    <Header>
      <div className="pl2">
        {props.navLeft && (
          <Link to={props.navLeft}>
            <Icon iconName={props.iconLeft} />
          </Link>
        )}
      </div>
      <Title>{props.title}</Title>
      <div className="pa3">
        {props.navRight && (
          <Link to={props.navRight}>
            <Icon iconName={props.iconRight} />
          </Link>
        )}
      </div>
    </Header>
  )
}
