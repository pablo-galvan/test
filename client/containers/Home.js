'use strict';

import React from 'react';

import Search from '../components/Search';

class Home extends React.Component {
	render() {
		return <div><Search {...this.props} /></div>
	}
}

export default Home;