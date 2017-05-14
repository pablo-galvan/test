'use strict';

let _ = require('underscore');
let Endpoint = require('../modules/Endpoint');

const AUTHOR = {
    "name": "Pablo",
    "lastname": "Galvan"
};

class Items extends Endpoint {
    registerRoutes() {
        this.api.get('/items', this.handlerItems.bind(this));
        this.api.get('/items/:id', this.handlerItemsID.bind(this));
    }

    handlerItems(req, res) {
        let route = 'sites/MLA/search';
        let params = {
            params: {
                q: req.query.q
            }
        };

        this.request.get(route, params).then(response => {
            let categories = _.pluck(_.filter(response.data['available_filters'], (v, k) => {
                return v.id == "category";
            })[0].values, 'name');
            let items = _.map(response.data.results, (v) => {
                return {
                    id: v.id,
                    title: v.title,
                    price: {
                        currency: v['currency_id'],
                        amount: v.price,
                        decimals: Number(String(v.price).split('.')[1] || 0)
                    },
                    picture: v.thumbnail,
                    condition: v.condition,
                    'free_shipping': !!v.shipping['free_shipping']
                };
            });

            return this.send(req, res, {
                status: response.status,
                data: {
                    author: AUTHOR,
                    categories,
                    items
                }
            });
        }).catch(err => {
            this.error(res, err);
        });
    }

    handlerItemsID(req, res) {
        let route = `items/${req.params.id}`;
        let description;

        this.request.get(`${route}/description`).then(description => {
            return this.request.get(route).then(response => {
                let item = response.data;
                item = {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item['currency_id'],
                            amount: item.price,
                            decimals: Number(String(item.price).split('.')[1] || 0)
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        'free_shipping': !!item.shipping['free_shipping'],
                        description: description.data.text
                };

                return this.send(req, res, {
                    status: response.status,
                    data: {
                        author: AUTHOR,
                        item
                    }
                });
            });
        }).catch(err => {
            this.error(res, err);
        });
    }
}

module.exports = Items;
