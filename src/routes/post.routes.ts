import { Elysia } from "elysia";


class PostRoutes {
  private routes: Elysia;

  constructor() {
     this.routes = new Elysia()
        .get("/posts", () => {
            return "Hello Elysia";
        })
        .get("/posts/:id", ({ params }) => {
            return `Hello Elysia! Your id is ${params.id}`;
        })
        .post("/posts", ({ body }) => {
            return "Post created";
        })
        .put("/posts/:id", ({ params, body }) => {
            return `Updated post ${params.id}`;
        });
  }

  getRoutes() {
    return this.routes;
  }
}

export default new PostRoutes();