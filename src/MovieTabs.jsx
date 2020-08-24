import React from 'react';

const MovieTabs = (props) => {
  console.log(props);

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={
            `nav-link ${props.sort_by === 'popularity.desc' ? 'active' : ''}`
          }>
          Popularity
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Revenue</div>
      </li>
      <li className="nav-item">
        <div className="nav-link">Vote avarege</div>
      </li>
    </ul>
  );
};

export default MovieTabs;
