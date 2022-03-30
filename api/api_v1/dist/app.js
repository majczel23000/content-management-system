"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = require("./users/users.router");
const auth_router_1 = require("./auth/auth.router");
const db_1 = require("./database/db");
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeDatabaseConnection();
        this.listen();
        this.initializeControllers(controllers);
        this.initializeDefaultRoute();
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    }
    initializeDatabaseConnection() {
        const db = new db_1.Database();
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/api', controller.router);
        });
    }
    initializeDefaultRoute() {
        this.app.get('*', (req, res) => {
            res.status(404).json({
                code: 404,
                message: 'Not found',
                name: 'NOT_FOUND'
            });
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.App = App;
const app = new App([
    new auth_router_1.AuthRouter('/auth'),
    new users_router_1.UsersRouter('/users'),
], 3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHdEQUEwQztBQUMxQyxnREFBdUI7QUFFdkIsdURBQW1EO0FBQ25ELG9EQUFnRDtBQUNoRCxzQ0FBeUM7QUFFekMsTUFBYSxHQUFHO0lBSVosWUFBWSxXQUF5QixFQUFFLElBQVk7UUFINUMsUUFBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQztRQUNyQyxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVPLHFCQUFxQjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVPLDRCQUE0QjtRQUNoQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxXQUF5QjtRQUNuRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sc0JBQXNCO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUUsR0FBRztnQkFDVCxPQUFPLEVBQUUsV0FBVztnQkFDcEIsSUFBSSxFQUFFLFdBQVc7YUFDcEIsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBOUNELGtCQThDQztBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2hCLElBQUksd0JBQVUsQ0FBQyxPQUFPLENBQUM7SUFDdkIsSUFBSSwwQkFBVyxDQUFDLFFBQVEsQ0FBQztDQUM1QixFQUFFLElBQUksQ0FBQyxDQUFDIn0=