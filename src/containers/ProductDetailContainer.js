import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import ProductDetail from '../components/ProductDetail'

class ProductDetailContainer extends Component {
    render() {
        return (
            <ProductDetail {...this.props}/>
        );
    }
}
ProductDetailContainer.propTypes = {
    autoRehydrated: PropTypes.object.isRequired

};
function select(state) {

    const { autoRehydrated  } = state;

    return {
        autoRehydrated
    };
}

const bindActions = {

};

export default connect(select, bindActions)(ProductDetailContainer)

