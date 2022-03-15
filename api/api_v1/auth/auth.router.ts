import { BaseRouter } from '../shared/class/base.router';

export class AuthRouter extends BaseRouter {

    constructor(
        path: string
    ) {
        super(path);
    }

    configureRoutes(): void {
        this.router.post(`${this.path}/login`);
        this.router.post(`${this.path}/logout`);
        this.router.post(`${this.path}/reset-password`);
    }
}
