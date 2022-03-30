import express from 'express';
import bcrypt from 'bcrypt'
import { AuthRequestModel } from '../shared/models/auth/auth-request.model';
import usersDB from '../shared/schemas/user.schema';
import { UserModel } from '../shared/models/users/user.model';

export class AuthController {

    constructor() {

    }

    // TODO: implement bcrypt
    public login(req: express.Request, res: express.Response): void {
        const data: AuthRequestModel = req.body;
        usersDB.findOne({ email: data.email }, (err: any, user: UserModel) => {
            if (err) {
                res.status(500).json('GLOBAL_ERROR');
                return;
            }
            if (!user) {
                res.status(400).json('LOGIN_ERROR');
                return;
            }
            res.status(200).json(user);
            return;
        });
    }

    public resetPassword(req: express.Request, res: express.Response): void {

    }
}