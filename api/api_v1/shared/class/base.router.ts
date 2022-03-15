import express from 'express';

export abstract class BaseRouter {

    public router = express.Router();
    public path: string;

    protected constructor(path: string) {
        this.path = path;
    }

    abstract configureRoutes(): void;
}
