import { BaseRouter } from '../shared/base/base.router';
import { AuthController } from './auth.controller';

export class AuthRouter extends BaseRouter {

    protected authController: AuthController;

    constructor(
        path: string
    ) {
        super(path);
        this.authController = new AuthController();
        this.configureRoutes();
    }

    configureRoutes(): void {
        this.router.post(`${this.path}/login`, this.authController.login);
        this.router.post(`${this.path}/logout`);
        this.router.post(`${this.path}/reset-password`);
    }
}
