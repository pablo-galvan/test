'use strict';

import React from 'react';

import Search from '../components/Search';

class SearchBar extends React.Component {
    render() {
        let { children } = this.props;
console.log(this.props);
        return (
                <div>
                    <Search />
                    { children }
                </div>
            );
    }

}

export default SearchBar;