import Elysia from "elysia";
import postRoutes from "./post.routes";

class Router {
    private routes: Elysia;

    constructor() {
        this.routes = new Elysia()
            .use(postRoutes.getRoutes());
    }

    getRoutes() {
        return this.routes;
    }

}

export default new Router();