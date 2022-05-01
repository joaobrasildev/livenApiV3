import express from 'express';
import bodyParser from 'body-parser';

class Application {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
    }
}

export default new Application().app;
