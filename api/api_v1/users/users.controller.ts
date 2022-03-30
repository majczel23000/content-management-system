import express from 'express';
import { BaseController } from '../shared/base/base.controller';
import usersDB from '../shared/schemas/user.schema';

export class UsersController extends BaseController {

    constructor() {
        super();
    }

    create(req: express.Request, res: express.Response): void {

    }

    getAll(req: express.Request, res: express.Response): void {

    }

    getById(req: express.Request, res: express.Response): void {

    }

    removeById(req: express.Request, res: express.Response): void {

    }

    modifyById(req: express.Request, res: express.Response): void {

    }

    activateById(req: express.Request, res: express.Response): void {

    }

    deactivateById(req: express.Request, res: express.Response): void {

    }
}
