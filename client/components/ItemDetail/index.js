'use strict';

import React from 'react';
import './item.scss'

class ItemDetail extends React.Component {
    render() {
        let { item } = this.props;

        return <div className="item-body">
            <img src={ item.picture } alt={ item.title } />
            <div className="item-title">
                <h3>{ item.title }</h3>
                <h2>{ item.price.currency } { item.price.amount }</h2>
                <a href="#">Comprar</a>
            </div>
            <h4>Descripción del producto</h4>
            <div className="item-description" dangerouslySetInnerHTML={{ __html: item.description }}>
            </div>
        </div>;
    }
}

export default ItemDetail;