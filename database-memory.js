import {randomUUID} from "node:crypto"

export class DatabaseMemory {
  #videos = new Map()

  create(video){
    const videoID = randomUUID()
    this.#videos.set(videoID, video)
  }
  
  list(){
    return Array.from(this.#videos.entries()).map((videoArray) => {
      const id = videoArray[0]
      const data = videoArray[1]

      return {
        id,
        ...data,
      }
    })
  }
  
  update(id, video){
    this.#videos.set(id,video)
  }
  delete(id) {
    this.#videos.delete(id)

  }
}