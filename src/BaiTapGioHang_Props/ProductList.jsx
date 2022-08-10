import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { data , xemChiTiet } = this.props;
    return (
      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <ProductItem xemChiTiet={xemChiTiet}  item={item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
