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
      sort_by: 'revenue.desc'
    };

    this.removeMovie = this.removeMovie.bind(this);
    this.addMovieToWillWatch = this.addMovieToWillWatch.bind(this);
  }

  getMovies() {
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
    this.getMovies();
  }

  componentDidUpdate(prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  render() {
    return (
      <div className="container m-3">
        <div className="row">
          <div className="col-9 p-3">
            <div className="container-fluid" style={{ position: 'relative' }}>
              <div
                className="row"
                style={{
                  position: 'fixed',
                  top: 0,
                  left: '15px',
                  width: '100%',
                  zIndex: 9,
                  background: '#ccc'
                }}>
                <div className="col-9 p-3">
                  <MovieTabs
                    sort_by={this.state.sort_by}
                    updateSortBy={this.updateSortBy}
                  />
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
              <div
                className="row"
                style={{
                  position: 'absolute',
                  top: '60px',
                  left: 0,
                  width: '100%'
                }}>
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
        </div>
      </div>
    );
  }
}

export default App;
