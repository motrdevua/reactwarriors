import React from 'react';

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      moviesWillWatch: false
    };
  }

  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch
    } = this.props;

    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <div className="card">
          <p className="card__title mb-0">{movie.title}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              movie.poster_path || movie.backdrop_path
            }`}
            alt={movie.title}
          />
          <p className="d-flex align-items-center justify-content-center rate p-2 m-0">
            Rating: {movie.vote_average}
          </p>
          <div
            style={{ width: '100%' }}
            className="p-1 d-flex justify-content-between align-items-center">
            {this.state.moviesWillWatch ? (
              <button
                type="button"
                className="btn btn-secondary p-1"
                onClick={() => {
                  this.setState({
                    moviesWillWatch: false
                  });
                  removeMovieFromWillWatch(movie);
                }}>
                will watch remove
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary p-1"
                onClick={() => {
                  addMovieToWillWatch(movie);
                  this.setState({
                    moviesWillWatch: true
                  });
                }}>
                will watch add
              </button>
            )}
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
