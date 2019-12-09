import React from 'react'
import Product from './Product';
import Title from './Title';
import { storeProduct, storeProducts} from '../data';
import {ProductConsumer} from '../context';


class ProductList extends React.Component{
    state = {
        products: storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;