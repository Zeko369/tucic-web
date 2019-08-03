import React, { Component } from "react";

class Webshop extends Component {
  render() {
    const { product } = this.props.match.params;

    return (
      <>
        <h1>Product</h1>
        {product}
      </>
    );
  }
}

export default Webshop;
