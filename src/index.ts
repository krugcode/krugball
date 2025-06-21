import { Hono } from 'hono'


const app = new Hono()

app.post('/match/start/:id', async (c) => {
  console.log(`🚀 Received match start request`)
  const id = c.req.param('id');
  const result = await Engine.Start()

  return c.json({
    message: result.status === 'ready' ?
      "Engine started successfully!" :
      "Engine failed to start",
    ...result
  })
})

app.get('/health', (c) => c.text('Arena ready for battle'))

export default app
