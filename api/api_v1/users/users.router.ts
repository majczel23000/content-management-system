import { BaseRouter } from '../shared/base/base.router';
import { UsersController } from './users.controller';

export class UsersRouter extends BaseRouter {

    protected usersController: UsersController;

    constructor(
        path: string,
    ) {
        super(path);
        this.usersController = new UsersController();
        this.configureRoutes();
    }

    configureRoutes(): void {
        this.router.get(`${this.path}/`, this.usersController.getAll);
        this.router.get(`${this.path}/:id`, this.usersController.getById);
        this.router.post(`${this.path}/`, this.usersController.create);
        this.router.put(`${this.path}/:id`, this.usersController.modifyById);
        this.router.put(`${this.path}/:id/activate`, this.usersController.activateById);
        this.router.put(`${this.path}/:id/deactivate`, this.usersController.deactivateById);
        this.router.delete(`${this.path}/:id`, this.usersController.removeById);
    }
}
