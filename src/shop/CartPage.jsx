import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from '../shop/CheckOutPage'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItem);
  }, []);

  //calculate prices

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle qunatity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update localstorage with new cart item
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle qunatity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      //update localstorage with new cart item
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  ///handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    //update new cart
    setCartItems(updatedCart);
    updateLocalstorege(updatedCart);
  };

  const updateLocalstorege = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link>{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="des qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        $ {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top end*/}
            {/* cart bottom*/}
            <div className="cart-bottom">
              {/* checkout-box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    className="cart-page-input-text"
                    placeholder="Coupon Code ...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                     </div>
                </form>
              </div>

              {/* shopping-box */}
              <div className="shiping-box">
                <div className="row">
                    {/* Left section */}
                    <div className="col-md-6 col-12">
                        <div className="calculate-shiping">
                            <h3>Calculate Shipping</h3>
                            <div className="outline-select">
                                <select>
                                    <option value="uk">UK</option>
                                    <option value="ind">India</option>
                                    <option value="usa">USA</option>
                                    <option value="np">Nepal</option>
                                    <option value="aus">Australia</option>
                                </select>
                                <span className="select-icon">
                                    <i className="icofont-rounded-down"></i>
                                </span>
                            </div>

                            <div className="outline-select shipping-select">
                                <select>
                                    <option value="ny">New York</option>
                                    <option value="ld">London</option>
                                    <option value="mum">Mumbai</option>
                                    <option value="del">Delhi</option>
                                    <option value="br">Brazil</option>
                                </select>
                                <span className="select-icon">
                                    <i className="icofont-rounded-down"></i>
                                </span>
                            </div>
                            <input type="text" name="potsalCode" id="potsalCode" placeholder="PostCode/Zip *" className="cart-page-input-text"/>
                            <button type="submit">Update Address</button>
                        </div>
                    </div>

                     {/* right section */}
                    <div className="col-md-6 col-12">
                        <div className="cart-overview">
                            <h3>Cart Totals</h3>
                            <ul className="leb-ul">
                                <li>
                                    <span>Cart Subtotal</span>
                                    <p className="pull-right">$ {cartSubtotal}</p>
                                </li>
                                <li>
                                    <span>Shipping and Handling</span>
                                    <p className="pull-right">Free Shipping</p>
                                </li>
                                <li>
                                    <span>Order Total</span>
                                    <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
