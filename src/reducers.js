import { combineReducers } from 'redux'
import { append } from 'ramda'
import { ADD_MOVIE } from './constants'
/*
action // {type: ADD_MOVIE, payload: {Title: "The creature ...", Year: "1952", Poster: "some url"}}
*/

const movies = (state = defaultMovies(), action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return append(action.payload, state)
    default:
      return state
  }
}

function defaultMovies() {
  return [
    {
      id: 1,
      title: 'What about Bob?',
      year: '1991',
      poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxMjU2ODk4N15BMl5BanBnXkFtZTgwODQzNTcxMTE@._V1_SX300.jpg'
    },
    {
      id: 2,
      title: 'Groundhog Day',
      year: '1993',
      poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      poster:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg'
    }
  ]
}

export default combineReducers({ movies })
