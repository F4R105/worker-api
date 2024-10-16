import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono'
import { products } from './db/schema';

export type Env = {
  DB: D1Database;
}

const app = new Hono<{Bindings: Env}>()

app.get('/', (c) => {
  return c.json({message: "hello worker"})
})

app.get('/products', async (c) => {
  // return c.text('Hello Hono!')
  const db = drizzle(c.env.DB)
  const result = await db.select().from(products).all()
  return c.json(result)
})

export default app
