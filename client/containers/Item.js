'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getItem } from '../actions';
import Search from '../components/Search';
import ItemDetail from '../components/ItemDetail';

@connect(store => {
    return {
        data: store.reducer.item
    }
})
class Item extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(getItem(this.props.params.id));
    }

    render() {
        return <div>
            <Search {...this.props} />
            { typeof this.props.data != 'undefined' ? <ItemDetail item={ this.props.data.item } /> : null }
        </div>;
    }
}

export default Item;