"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const base_router_1 = require("../shared/class/base.router");
class AuthRouter extends base_router_1.BaseRouter {
    constructor(path) {
        super(path);
    }
    configureRoutes() {
        this.router.post(`${this.path}/login`);
        this.router.post(`${this.path}/logout`);
        this.router.post(`${this.path}/reset-password`);
    }
}
exports.AuthRouter = AuthRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hdXRoL2F1dGgucm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUF5RDtBQUV6RCxNQUFhLFVBQVcsU0FBUSx3QkFBVTtJQUV0QyxZQUNJLElBQVk7UUFFWixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FDSjtBQWJELGdDQWFDIn0=