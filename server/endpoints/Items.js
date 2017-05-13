'use strict';

let Endpoint = require('../modules/Endpoint');

class Items extends Endpoint {
    registerRoutes() {
        this.api.get('/items', this.handlerGet.bind(this));
    }

    handlerGet(req, res) {
    	this.request.get('sites/MLA/search', {
    		params: {
    			q: req.query.q
    		}
    	}).then(response => {
    		this.send(req, res, response);
    	}).catch(err => {
    		this.error(res, err);
    	});
    }
}

module.exports = Items;