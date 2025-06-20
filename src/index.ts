import { Hono } from 'hono'
import { DB } from './engine'

const app = new Hono()

app.get('/', (c) => {
  console.log("CONTEXT", c)
  const response = DB.StartDB();
  return c.json(response)
})

export default app
