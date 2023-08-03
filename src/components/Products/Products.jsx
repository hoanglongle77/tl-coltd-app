import React from "react";
import "./products.css";

const Products = () => {
  return (
    <div className="box-product">
      <div className="title-theme">
        <h2>Sản phẩm nổi bật</h2>
      </div>
      <div className="box-detail-product-list">
        <div className="row">
          <div className="list-item col-md-3 col-sm-3 col-xs-6">1</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">2</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">3</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">4</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">5</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">6</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">7</div>
          <div className="list-item col-md-3 col-sm-3 col-xs-6">8</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
