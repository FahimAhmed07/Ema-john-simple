import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price
    let total = cart.reduce(totalReducer, 0).toFixed(2)
    total = Number(total)
    const shippingReducer = (prevValue, currentValue) => prevValue + currentValue.shipping;
    let shipping = cart.reduce(shippingReducer, 0).toFixed(2)
    shipping = Number(shipping)
    let tax = parseFloat(total + shipping) * 0.1

    const grandTotal = parseFloat(total + shipping + tax)


    return (
        <div>
            <h2><i className="fas fa-shopping-cart">{cart.length}</i></h2>
            <h3>Total:{total} </h3>
            <h3>Tax: {tax.toFixed(2)}</h3>
            <h3>Shipping: {shipping}</h3>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;