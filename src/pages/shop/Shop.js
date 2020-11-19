import React, { Component } from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

import SHOP_DATA from "./shop.data";

import "./Shop.scss";

class Shop extends Component {
  constructor(props) {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProperties }) => (
          <PreviewCollection key={id} {...otherProperties} />
        ))}
      </div>
    );
  }
}

export default Shop;
