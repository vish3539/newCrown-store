import React, { Component } from "react";
import PreviewCollComp from "../../components/Preview-collections/PreviewCollComp";
import SHOP_DATA from "./ShopData";
import "./ShopStyle.scss";

class ShopComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherProps }) => (
          <PreviewCollComp key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopComp;
