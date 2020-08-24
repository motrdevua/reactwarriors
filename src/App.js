import React from 'react';
import './styles.css';

import { moviesData } from './moviesData';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';

const API_URL = 'https://api.themoviedb.org/3';

const API_KEY_3 = '3f4ca4f3a9750da53450646ced312397';

// UI: state, props

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
      sort_by: 'popularity.desc'
    };

    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
  }

  removeMovie(movie) {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovies,
      moviesWillWatch: updateMoviesWillWatch
    });
  }

  addMovieToWillWatch = (movie) => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  componentDidMount() {
    console.log('didMount');

    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results
        });
      });
  }

  render() {
    return (
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-9 p-3" style={{ background: '#ccc' }}>
            <div className="container">
              <div className="row">
                <div className="col-12 pb-3">
                  <MovieTabs sort_by={this.state.sort_by} />
                </div>
              </div>
              <div className="row p-0">
                {this.state.movies.map((movie) => {
                  return (
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="col-3 pt-4"
            style={{ position: 'relative', background: '#aaa' }}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ position: 'fixed' }}>
              <p>Will watch:</p>
              <p className="pl-3 text-primary">
                {this.state.moviesWillWatch.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
