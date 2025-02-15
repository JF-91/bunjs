import { eq } from "drizzle-orm";
import { db } from "../db";
import { posts } from "../db/posts.schema";

class PostService {
    async getAllPosts() {
        try {
            const allPosts = await db.select().from(posts);
            return { success: true, data: allPosts };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async getPostById(id: string) {
        try {
            const post = await db
                .select()
                .from(posts)
                .where(eq(posts.id, id));
            
            return { success: true, data: post[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async createPost(data: typeof posts.$inferInsert) {
        try {
            const newPost = await db
                .insert(posts)
                .values(data)
                .returning();
            
            return { success: true, data: newPost[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async updatePost(id: string, data: Partial<typeof posts.$inferInsert>) {
        try {
            const updatedPost = await db
                .update(posts)
                .set(data)
                .where(eq(posts.id, id))
                .returning();
            
            return { success: true, data: updatedPost[0] };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

export default new PostService();