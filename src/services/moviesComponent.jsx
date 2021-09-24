import React, { Component } from 'react';
import { getMovies } from './fakeMovieService';

class MoviesComponent extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0)
      return (
        <p className="lead mp-3">
          There are no movies currently in the DataBase
        </p>
      );
    return (
      <div className="">
        <p className="p-3">Currently there are {count} in the DataBase</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td className="table-secondary">{movie.title}</td>
                <td className="table-success">{movie.genre.name}</td>
                <td className="table-info">{movie.numberInStock}</td>
                <td className="table-secondary">{movie.dailyRentalRate}</td>
                <td className="table-warning">
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MoviesComponent;
