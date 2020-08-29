import React from 'react';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesWillWatch: false
    };
  }

  // componentWillUnmount() {
  //   console.log('unmount');
  // }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;

    const getClassNameByValue = () => {
      return `btn p-1 ${
        this.state.moviesWillWatch ? 'btn-secondary' : 'btn-primary'
      }`;
    };
    const handleClick = () => {
      if (this.state.moviesWillWatch) {
        this.setState({
          moviesWillWatch: false
        });
        removeMovieFromWillWatch(movie);
      } else {
        this.setState({
          moviesWillWatch: true
        });
        addMovieToWillWatch(movie);
      }
    };

    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
        <div className="card">
          <p className="card__title mb-0">{movie.title}</p>
          <img
            src={
              movie.poster_path || movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${
                    movie.poster_path || movie.backdrop_path
                  }`
                : 'https://via.placeholder.com/315'
            }
            alt={movie.title}
          />
          <p className="d-flex align-items-center justify-content-center rate p-2 m-0">
            Rating: {movie.vote_average}
          </p>
          <div
            style={{ width: '100%' }}
            className="p-1 d-flex justify-content-between align-items-center">
            <button
              type="button"
              className={getClassNameByValue()}
              onClick={handleClick}>
              {this.state.moviesWillWatch
                ? 'will watch remove'
                : 'will watch add'}
            </button>
            <button
              type="button"
              className="btn btn-warning p-1"
              onClick={removeMovie.bind(null, movie)}>
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
