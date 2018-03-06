import React from 'react'

export default props => {
  return (
    <header className="h3 avenir bg-black-90 white flex item-center justify-between">
      {props.children}
    </header>
  )
}
