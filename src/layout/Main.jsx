import React from "react"
import { Movies } from '../components/Movies'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
  state = {
    movies: [],
    searchTxt: 'matrix',
    type: 'all',
    loading: true,
    responseStatus: false
  }

  componentDidMount() {
    this.fetchMovies('matrix', 'all')
  }

  fetchMovies = (str, type) => {
    this.setState({
      type: type
    })

    console.log(str, type)
    const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`
    const typePath = type === 'all' ? '' : `&type=${type}`
    const searchPath = str.length ? `${str}` : `matrix`
    const fetchStr = `${baseUrl}&s=${searchPath}${typePath}`
    console.log(fetchStr)
    fetch(fetchStr)
      .then(response => response.json())
      .then(data => this.setState({responseStatus: data.Response,  movies: data.Search, loading: false}))
  }

  // search = (txt, type) => {
  //   console.log('recieve: ', txt, type)
  //   this.setState({
  //     searchTxt: txt,
  //     type: type
  //   })
  //   this.fetchMovies()
  // }

  render() {
    const { type, movies, loading, responseStatus } = this.state

    return (
      <div className="container content">
        <Search type={type} handleSearch={this.fetchMovies} />
        {
          !loading
            ? <Movies responseStatus={responseStatus} movies={movies} />
            : <h5>loading</h5>
        }
      </div>
    )
  }

}

export {Main}