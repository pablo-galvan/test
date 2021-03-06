'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { search } from '../../actions';
import './search.scss';

@connect()
class Search extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.location.query.search != '') {
            this.state = {
                phrase: this.props.location.query.search
            };
        }

        this.onChange = this.onChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    handlerSubmit(e) {
        e.preventDefault();

        this.props.dispatch(search(this.state.phrase));
        browserHistory.push(`/items?search=${this.state.phrase}`);
    }

    onChange(e) {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <header role="banner" className="nav-header nav-header-sticky">
                <div className="nav-bounds ">
                    <a className="nav-logo" href="//www.mercadolibre.com.ar/">
                        Mercado Libre Argentina - Donde comprar y vender de todo
                    </a>
                    <form className="nav-search" action="//www.mercadolibre.com.ar/jm/search" method="GET" role="search">
                        <input tabIndex="1" value={ this.state.phrase } type="text" onChange={ this.onChange } className="nav-search-input" name="phrase" placeholder="" autoComplete="off" />
                        <button type="submit" onClick={ this.handlerSubmit } className="nav-search-btn">
                            <i className="nav-icon-search"></i>
                        </button>                    
                    </form>
                </div>
        </header>
        );
    }
}

export default Search;