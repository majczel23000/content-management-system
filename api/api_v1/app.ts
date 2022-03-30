import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors'
import { BaseRouter } from './shared/base/base.router';
import { UsersRouter } from './users/users.router';
import { AuthRouter } from './auth/auth.router';
import { Database } from './database/db';

export class App {
    public app: express.Application = express();
    public port = 3000;

    constructor(controllers: BaseRouter[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeDatabaseConnection();
        this.listen();
        this.initializeControllers(controllers);
        this.initializeDefaultRoute();
    }

    private initializeMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended:false }));
        this.app.use(cors());
    }

    private initializeDatabaseConnection(): void {
        const db = new Database();
    }

    private initializeControllers(controllers: BaseRouter[]): void {
        controllers.forEach((controller: BaseRouter) => {
            this.app.use('/api', controller.router);
        });
    }

    private initializeDefaultRoute(): void {
        this.app.get('*', (req: express.Request, res: express.Response) => {
            res.status(404).json({
                code: 404,
                message: 'Not found',
                name: 'NOT_FOUND'
            })
        });
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

const app = new App([
    new AuthRouter('/auth'),
    new UsersRouter('/users'),
], 3000);
