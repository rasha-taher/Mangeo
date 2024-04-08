import React from "react";
import blackShirt from '../images/black-shirt.png'
const ProductsTable = () => {
  return (
    <div className="productsTable">
      <div className="headerInTable">
        <p className="tableTitle">Products </p>
        <div>
          <select className="optionToSell">
            <option value="all"> More to sell</option>
          </select>
          <button className="addProductBtn">+ Add Product</button>
        </div>
      </div>

      <table className="theTable">
        <thead>
          <tr>
            <td>No</td>
            <td>Image</td>
            <td>Product Name</td>
            <td>Price</td>
            <td>Status</td>
            <td>Sell</td>
            <td>View</td>
            <td>Earning</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><img className="itemImageInTable" src={blackShirt}/> </td>
            <td> T-SHIRT OWN THE RUN</td>
            <td>$200</td>
            <td>Available</td>
            <td>128</td>
            <td>12.308</td>
            <td>$5,831</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
