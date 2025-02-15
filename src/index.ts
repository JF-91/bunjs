import { Elysia } from "elysia";
import Router from "./routes/router";
import { swagger } from '@elysiajs/swagger'
import database from "./db/database";

database.getPool();
class App extends Elysia {
  constructor() {
    super();
    
    this.use(Router.getRoutes());
    this.use(swagger())
    this.listen(8000);

    console.log(
      `🦊 Elysia is running at ${this.server?.hostname}:${this.server?.port}`
    );
  }
}

new App();
