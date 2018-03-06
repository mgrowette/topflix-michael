import React from 'react'
import HeaderBar from '../components/headerbar'
import { connect } from 'react-redux'
import { List, ListItem } from 't63'
import { map } from 'ramda'

const Home = props => {
  return (
    <section>
      <HeaderBar title="Top Flix" navRight="/search" iconRight="search" />
      <List>
        {map(
          movie => <ListItem key={movie.id}>{movie.title}</ListItem>,
          props.movies
        )}
      </List>
    </section>
  )
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

const connector = connect(mapStateToProps)

export default connector(Home)
