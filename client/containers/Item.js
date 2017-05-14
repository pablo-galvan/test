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

		this.props.dispatch(getItem(this.props.params.id));
	}
	render() {
console.log(this.props);
		return <div>
			<Search {...this.props} />
			{ typeof this.props.item != 'undefined' ? <img src={ this.props.item.pictures[0]['secure_url'] } alt={ item.title } /> : null }
			
		</div>;
	}
}

export default Item;