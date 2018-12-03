import React, { Component } from "react";
import DrinksTable from "./drinksTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getDrinks } from "../services/tapRoomService";
import { getFlavors } from "../services/flavorService";
import { paginate } from "../utilities/paginate";
import _ from "lodash";

class Drinks extends Component {
  state = {
    drinks: [],
    flavors: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const flavors = [{ _id: "", name: "All Flavors" }, ...getFlavors()];

    this.setState({ drinks: getDrinks(), flavors });
  }

  handleDelete = drink => {
    const drinks = this.state.drinks.filter(d => d._id !== drink._id);
    this.setState({ drinks });
  };

  handleLike = drink => {
    const drinks = [...this.state.drinks];
    const index = drinks.indexOf(drink);
    drinks[index] = { ...drinks[index] };
    drinks[index].liked = !drinks[index].liked;
    this.setState({ drinks });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFlavorSelect = flavor => {
    this.setState({ selectedFlavor: flavor, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedFlavor,
      drinks: allDrinks
    } = this.state;

    const filtered =
      selectedFlavor && selectedFlavor._id
        ? allDrinks.filter(d => d.flavor._id === selectedFlavor._id)
        : allDrinks;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const drinks = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: drinks };
  };

  render() {
    const { length: count } = this.state.drinks;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no drinks in the database.</p>;

    const { totalCount, data: drinks } = this.getPagedData();

    return (
      <div className="stylingBody">
        <style jsx>{`
          .stylingBody {
            p {
              color: white;
            }
          }
        `}</style>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.flavors}
              selectedItem={this.state.selectedFlavor}
              onItemSelect={this.handleFlavorSelect}
            />
          </div>
          <div className="col">
            <p>Showing {totalCount} Drinks in the database.</p>
            <DrinksTable
              drinks={drinks}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Drinks;
