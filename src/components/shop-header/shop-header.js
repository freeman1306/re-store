import React from 'react';
import './shop-header.css';
import {Link} from 'react-router-dom'
const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link path="/">
      <div className="logo text-dark" href="#">ReStore</div>
      </Link>
      <Link path="cart">
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
