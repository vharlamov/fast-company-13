import httpService from "./http.service"

const professionEndpoint = "profession/"

const professionService = {
  get: async () => {
    const { data } = await httpService.get(professionEndpoint)
    return data
  },
  update: async (id, content) => {
    const { data } = await httpService.put(professionEndpoint + id, content)
    return data
  },
  add: async (content) => {
    const { data } = await httpService.post(professionEndpoint, content)
    return data
  },
  delete: async (id) => {
    const { data } = await httpService.delete(professionEndpoint + id)
    return data
  }
}

export default professionService
