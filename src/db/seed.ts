import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { postTable } from './posts.schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const post: typeof postTable.$inferInsert = {
        title: 'Hello, World!',
        slug: 'hello-world',
        body: 'This is a post body.',
  };

  await db.insert(postTable).values(post);
  console.log('New seed post created.');
}

main();
