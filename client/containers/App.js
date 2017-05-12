'use strict';

import React from 'react';

import Search from '../components/Search';

class App extends React.Component {
    render() {
        let { children } = this.props;

        return (
                <div>
                    <Search />
                    { children }
                </div>
            );
    }

}

export default App;