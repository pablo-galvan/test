'use strict';

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './listing.scss';

@connect(store => {
    return {
        search: store.reducer.items
    };
})
class Listing extends React.Component {
    render() {
        let { items } = this.props;

        return <div className="listing-body">
            <ul>
                { typeof items != 'undefined' ? items.map((v, k) => {
                        return <li key={ k }>
                            <Link to={ `/items/${v.id}`}>
                                <img src={ v.picture } alt={ v.title } />
                                <div>
                                    <h3>${ v.price.amount }</h3>
                                    { !!v['free_shipping'] ? <span className="icon icon-truck-small"></span> : null }
                                    <h2>{ v.title }</h2>
                                </div>
                            </Link>
                        </li>;
                    }) : null }
            </ul>
        </div>;
    }
}

export default Listing;