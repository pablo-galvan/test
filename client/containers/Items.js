'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { search } from '../actions';
import Search from '../components/Search';
import Listing from '../components/Listing';

@connect(store => {
    return {
        items: store.reducer.items
    }
})
class Items extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(search(this.props.location.query.search));
    }

    render() {
        return <div>
            <Search {...this.props} />
            { !!this.props.items ? <Listing items={ this.props.items }/> : null }
        </div>;
    }

}

export default Items;