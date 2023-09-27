import React, { Component } from 'react'
// import { AllProducts } from './AllProducts'
import { Combat, combatDetails } from './testrun2'

const ProductContext = React.createContext();

    class ProductProvider extends Component {
        state = {
            products: Combat,
            detailProduct: ''
        }

        render() {
            return (
                <ProductContext.Provider value={{
                    ...this.state,
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            )
        }

        
    }

    const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};