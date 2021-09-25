import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            products.map(product => <Product
                                key={product.key}
                                product={product}
                                handleCart={handleCart}
                            >

                            </Product>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;