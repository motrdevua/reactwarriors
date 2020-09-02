import React from 'react';

class Pagination extends React.Component {
  render() {
    const { page, updatePage, totalPages } = this.props;
    const handleClick = (value) => () => {
      return value >= 1 ? updatePage(value) : false;
    };

    return (
      <div className="navigation mt-4 mb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 d-flex justify-content-between align-items-center">
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleClick(page - 1)}>
                Prev Page
              </button>
              <div className="d-flex flex-column align-items-center justify-content-center m-0">
                <p className="total-pages m-0">Total Pages: {totalPages}</p>
                <p className="current-page m-0">Page number: {page}</p>
              </div>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleClick(page + 1)}>
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
