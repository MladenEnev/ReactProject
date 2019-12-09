import React , {Component} from 'react'
import {storeProducts , detailProduct} from './data';

const ProductContext = React.createContext();



class ProductProvider extends Component {
    state ={
        product:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail = () =>{
        console.log('hello from detail')
    }
    addToCart = () =>{
        console.log('hey from cart')
    }

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };