import { Elysia } from "elysia";

class PostController {
    private elysia: Elysia;

    constructor() {
        this.elysia = new Elysia()
    }

    getPosts() {
        return this.elysia.get("/posts", () => {
            return "Hello Elysia";
        });
    }

    getPostById() {
        return this.elysia.get("/posts/:id", ({ params }) => {
            return `Hello Elysia! Your id is ${params.id}`;
        });
    }

    createPost() {
        return this.elysia.post("/posts", ({ body }) => {
            return "Post created";
        });
    }

    updatePost() {
        return this.elysia.put("/posts/:id", ({ params, body }) => {
            return `Updated post ${params.id}`;
        });
    }

    getRoutes() {
        return this.elysia;
    }
}

export default new PostController();