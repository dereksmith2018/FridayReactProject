import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class DrinksTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: drink => <Link to={`/drinks/${drink._id}`}>{drink.title}</Link>
    },
    { path: "flavor.name", label: "Flavor" },
    { path: "numberInStock", label: "Stock" },
    { path: "purchaseCost", label: "Cost" },
    {
      key: "like",
      content: drink => (
        <Like liked={drink.liked} onClick={() => this.props.onLike(drink)} />
      )
    },
    {
      key: "delete",
      content: drink => (
        <button
          onClick={() => this.props.onDelete(drink)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { drinks, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={drinks}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default DrinksTable;
