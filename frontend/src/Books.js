import React, { Component } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

export default class Books extends Component {
  state = {
    error: null,
    loading: false,
    books: [],
  };

  componentDidMount = () => {
    console.log("------", document.cookie);
    // document.cookie =
    //   "limit=8; expires=" + new Date(Date.now() + 360 * 24 * 60 * 60 * 1000);

    // document.cookie =
    //   "limit=; expires=" + new Date(Date.now() - 360 * 24 * 60 * 60 * 1000);

    this.setState({ loading: true });

    // cookies limit unshij avna
    axios
      .get("books?limit=8")
      .then((result) =>
        this.setState({ loading: false, books: result.data.data })
      )
      .catch((err) => this.setState({ loading: false, error: err.response }));
  };

  render() {
    return (
      <div>
        <h1 className="title">Амазон номын дэлгүүр</h1>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className="columns is-multiline">
            {this.state.books.map((el) => (
              <div key={el._id} className="column is-one-quarter">
                <Link to={`/books/${el._id}`}>
                  <img
                    src={`https://data.internom.mn/media/images/${el.photo}`}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
