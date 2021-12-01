import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Author extends React.Component {
  state = {
    authors: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/lms/viewAuthor")
      .then((res) => {
        console.log(res);
        this.setState({ authors: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (id) => {
    axios.delete(`http://localhost:8080/lms/deleteAuthor/${id}`).then((res) => {
      const auth = this.state.authors.filter((au) => au.authorId != id);
      this.setState({ authors: auth });
    });
  };
  render() {
    return (
      <div className="container">
        <Link
          to="/authors/add"
          className="btn btn-secondary btn-large my-3 float-end"
        >
          Add
        </Link>
        <table className="table table-info table-striped">
          <thead>
            <tr>
              <th>Author Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map((author) => (
              <tr key={author.authorId}>
                <td>{author.authorId}</td>
                <td>{author.firstName}</td>
                <td>{author.lastName}</td>
                <td>{author.email}</td>
                <td>{author.contactno}</td>
                <td>
                  <Link to={`/authors/update/${author.authorId}`}>
                    <input
                      type="button"
                      value="Update"
                      className="btn btn-secondary me-2"
                    />
                  </Link>

                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-outline-danger"
                    onClick={() => this.handleDelete(author.authorId)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Author;
