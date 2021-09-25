import React from 'react';
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { name, price, img, stock, star } = props.product || {}
    return (

        <div className="col-md-6">
            <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text"><small className="text-muted">${price}</small></p>
                            <p className="card-text"><small className="text-muted">{stock} left</small></p>
                            <Rating className='
                            mb-2'
                                readonly
                                initialRating={star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                            />
                            <br />
                            <button onClick={() => props.handleCart(props.product)} className='btn btn-primary'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;