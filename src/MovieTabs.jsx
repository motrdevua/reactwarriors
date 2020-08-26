import React from 'react';

const MovieTabs = (props) => {
  console.log(props);
  const { sort_by, updateSortBy } = props;

  const handleClick = (value) => () => {
    updateSortBy(value);
  };

  const getClassNameByValue = (value) => {
    return `nav-link ${sort_by === value ? 'active' : ''}`;
  };

  console.log(updateSortBy);

  return (
    <ul className="tabs nav nav-pills">
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
};

export default MovieTabs;
