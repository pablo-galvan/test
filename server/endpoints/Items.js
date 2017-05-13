'use strict';

let Endpoint = require('../modules/Endpoint');

class Items extends Endpoint {
    registerRoutes() {
        this.api.get('/items', this.handlerGet.bind(this));
        this.api.get('/items/:id', this.handlerGet.bind(this));
    }

    handlerGet(req, res) {
        let route = 'sites/MLA/search';
        let params = {
            params: {
                q: req.query.q
            }
        };

        if (!!req.params.id) {
            route = `items/${req.params.id}`;
            params = {};
        }

        this.request.get(route, params).then(response => {
            this.send(req, res, response);
        }).catch(err => {
            this.error(res, err);
        });
    }
}

module.exports = Items;