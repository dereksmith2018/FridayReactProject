import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getDrink, saveDrink } from "../services/tapRoomService";
import { getFlavors } from "../services/flavorService";

class DrinkForm extends Form {
  state = {
    data: { title: "", flavorId: "", numberInStock: "", purchaseCost: "" },
    flavors: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      // .required()
      .label("Brand Title"),
    flavorId: Joi.string()
      // .required()
      .label("Type of Liquor"),
    numberInStock: Joi.number()

      .min(0)
      .max(10)
      // .required()
      .label("Number In Stock"),
    purchaseCost: Joi.number()

      .min(0)
      .max(10)
      // .required()
      .label("Cost")
  };

  componentDidMount() {
    const flavors = getFlavors();
    this.setState({ flavors });
    const drinkId = this.props.match.params.id;
    if (drinkId === "new") return;
    const drink = getDrink(drinkId);
    if (!drink) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(drink) });
  }
  mapToViewModel(drink) {
    return {
      _id: drink._id,
      title: drink.title,
      flavorId: drink.flavor._id,
      numberInStock: drink.numberInStock,
      purchaseCost: drink.purchaseCost
    };
  }
  doSubmit = () => {
    saveDrink(this.state.data);
    this.props.history.push("/drinks");
  };
  render() {
    return (
      <div>
        <h1>Add a Drink </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("flavor", "Type of Liquor", this.state.flavors)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("purchaseCost", "Cost")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default DrinkForm;
