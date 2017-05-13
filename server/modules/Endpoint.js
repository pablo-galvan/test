'use strict';

let _ = require('underscore');
let axios = require('axios');
let logger = require('winston');

class Endpoint {
    constructor(api) {
        this.api = api;
        this.request = axios.create({
            baseURL: 'https://api.mercadolibre.com/'
        });

        this.registerRoutes();
    }

    static isEnabled() {
        return true;
    }

    get name() {}

    registerRoutes() {}

    validate() {}

    handler() {}

    error(res, err) {
        if (!_.isEmpty(this.errors)) {
            err = this.errors;
        }
        logger.error(`Error: status: ${err.response.status} message: ${err.data.message}`);

        this.response(res, {
            status: err.status || 500,
            data: {
                error: {
                    type: err.type || {},
                    status: err.response.status
                },
                message: err.message
            }
        });
    }

    send(req, res, result) {
        return this.response(res, result);
    }

    response(res, result) {
        res.status(result.status).json(result.data);
    }
}

module.exports = Endpoint;