'use strict';

import React from 'react';
import { Link } from 'react-router';

class Listing extends React.Component {
    render() {
        let { items } = this.props;

        return <div>
            <ul>
                { !!items ? items.results.map((v, k) => {
                        return <li key={ k }>
                            <Link to={ `/items/${v.id}`}>
                                <img src={ v.thumbnail } alt={ v.title } />
                                <h3>${ v.price }</h3>
                                {v.shipping['free_shipping']}
                                { !!v.shipping['free_shipping'] ? <span className="ch-ico icon-truck-small"></span> : null }
                                <h2>{ v.title }</h2>
                                <span>{ v.address['state_name'] }</span>
                            </Link>
                        </li>;
                    }) : null }
            </ul>
        </div>;
    }
}

export default Listing;