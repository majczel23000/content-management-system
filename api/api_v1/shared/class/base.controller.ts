import express from 'express';

export abstract class BaseController {

    protected constructor() {
    }

    abstract create(req: express.Request, res: express.Response): void;
    abstract getAll(req: express.Request, res: express.Response): void;
    abstract getById(req: express.Request, res: express.Response): void;
    abstract removeById(req: express.Request, res: express.Response): void;
    abstract modifyById(req: express.Request, res: express.Response): void;
    abstract activateById(req: express.Request, res: express.Response): void;
    abstract deactivateById(req: express.Request, res: express.Response): void;
}
