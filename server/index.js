'use strict';

let _ = require('underscore');
let async = require('async');
let bodyParser = require('body-parser');
let compression = require('compression');
let express = require('express');
let helmet = require('helmet');
let morgan = require('morgan');
let path = require('path');
let winston = require('winston');

let Routes = require('./modules/Routes');

class Server {
    constructor() {
        this.app = express();
        this.api = express.Router();

        this.port = process.env.PORT || 8080;
        this.mode = process.env.MODE || 'dev';

        this.middlewares = {};
    }

    start() {
        let steps = [
            this.configure.bind(this),
            this.routing.bind(this),
            this.init.bind(this)
        ];

        async.series(steps);
    }

    configure(done) {
        this.app.disable('x-powered-by');

        this.app.use('/api', this.api);
        this.app.use('/static', express.static('public/static/'));
        this.app.get('*', (req, res) => {
            res.sendFile(path.resolve('public/index.html'));
        });

        this.api.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

        this.api.use(morgan('dev'));
        this.app.use(morgan('dev'));

        this.api.use(bodyParser.urlencoded({ extended: true }));
        this.api.use(bodyParser.json());
        
        this.api.use(compression());
        this.api.use(helmet());

        done(null);
    }

    routing(done) {
        new Routes(this.api);
        return done();
    }

    init(done) {
        this.app.listen(this.port, () => {
            let msg = `Server corriendo! puerto: ${this.port}`;
            winston.info(msg);
            return done();
        });
    }
}

module.exports = Server;