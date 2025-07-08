// Escrito em Node puro ////////////////////////////
//import {createServer} from "node:http"
//
//qconst server = createServer( () => {
//  console.log("Server is running")
//})
//
//server.listen(3333)


/////////////// Escrito em Fastify //////////////////
//import {fastify} from "fastify"
//
//const server = fastify()
//
//server.get("/", () => {
//  return "rota barra"
//})
//
//server.get("/hello", () => {
//  return "Hello"
//})
//
//server.get("/node", () => {
//  return "node"
//})
//
//server.listen({
//  port:3333
//})


//////// api de vídeos /////////
import {fastify} from "fastify"
import { DatabaseMemory } from "./database-memory.js"
const server = fastify()
const database = new DatabaseMemory()

// POST -> http://localhost:3333/videos
server.post("/videos", (request, reply) => {
  const {title, description, duration} = request.body

  //console.log(body)

  database.create({
    title: title,
    description: description,
    duration: duration,
  })
  //console.log(database.list())
  return reply.status(201).send()
})

server.get("/videos", () => {
  const videos = database.list()
  console.log(videos)
  return videos

})

//ROUTE PARAMETERS (id)
server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id
  const {title, description, duration} = request.body

  database.update(videoId, {
    title,
    description,
    duration,
  })
  return reply.status(204).send()
})

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id
  database.delete(videoId)

  return reply.status(204).send()

})

server.listen({
  port:3333
})
