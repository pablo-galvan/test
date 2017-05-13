'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { getItem } from '../actions';
import Search from '../components/Search';

@connect(store => {
	return {
		item: store.reducer.item
	}
})
class Item extends React.Component {
	constructor(props) {
		super(props);
console.log(this.props);
		this.props.dispatch(getItem(this.props.params.id));
	}
	render() {
		return <div>
			<Search {...this.props} />
			
		</div>;
	}
}

export default Item;