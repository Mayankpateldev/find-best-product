const { root } = require('../../../app/controllers/root')
const { notFound } = require('../../../app/controllers/notfound')
const request = require('supertest')
const app  = require('../../../app/app')

test('Hello World Controller', () => {
  const res = { json: jest.fn() }
  root({}, res)
  expect(res.json.mock.calls[0][0]).toEqual({ message: "Hello World" })
})

test('Not Found Route', () => {
  expect(notFound).toThrow("Route Not Found")
})


test('recommend', async () => {
    const response = await request(app)
    .get("/recommend")
   
  expect(response.status).toBe(200)
})