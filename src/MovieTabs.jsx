import React from 'react';

class MovieTabs extends React.Component {
  componentWillReceiveProps(nextProps, nextState) {
    console.log('nextProps', nextProps.sort_by);
    console.log('prevProps', this.props.sort_by);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    }
    return false;
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
