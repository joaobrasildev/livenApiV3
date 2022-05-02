import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes'

class Application {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.setupRoutes();
    }
    private setupRoutes() {
        this.app.use(routes);
      }    
}

export default new Application().app;
