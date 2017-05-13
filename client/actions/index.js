'use strict';

import request from 'axios';

const HOST = 'http://localhost:8080/';

export function search(phrase) {
    return (dispatch) => {
        request.get(`${HOST}api/items`, {
        	params: {
        		q: phrase
        	}
        })
        .then((res) => {
            dispatch({
                type: 'SEARCH_SUCCESS',
                payload: res.dataç
            });
        })
        .catch((err) => {
            dispatch({
                type: 'SEARCH_REJECTED',
                payload: err
            });
        });
    };
}