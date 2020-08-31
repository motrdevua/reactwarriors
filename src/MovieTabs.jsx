import React from 'react';

class MovieTabs extends React.Component {
<<<<<<< HEAD
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => () => {
      updateSortBy(value);
    };

    const getClassNameByValue = (value) => {
      return `nav-link ${sort_by === value ? 'active' : ''}`;
    };

    return (
      <ul className="tabs nav nav-pills d-flex justify-content-start align-items-center">
=======
  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => () => {
      updateSortBy(value);
    };

    const getClassNameByValue = (value) => {
      return `nav-link ${sort_by === value ? 'active' : ''}`;
    };

    return (
      <ul className="tabs nav nav-pills">
>>>>>>> 758416e0e0818e7d58b3f03cb447e7dd706fc650
        <li className="nav-item">
          <div
            className={getClassNameByValue('popularity.desc')}
            onClick={handleClick('popularity.desc')}>
            Popularity
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassNameByValue('revenue.desc')}
            onClick={handleClick('revenue.desc')}>
            Revenue
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassNameByValue('vote_average.desc')}
            onClick={handleClick('vote_average.desc')}>
            Vote average
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
