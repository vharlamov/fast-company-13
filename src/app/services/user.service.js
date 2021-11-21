import httpService from "./http.service"

const usersEndpoint = "user/"

const userService = {
  get: async () => {
    const { data } = await httpService.get(usersEndpoint)
    return data
  },
  update: async (id, content) => {
    const { data } = await httpService.put(usersEndpoint + id, content)
    return data
  },
  add: async (content) => {
    const { data } = await httpService.post(usersEndpoint, content)
    return data
  },
  delete: async (id) => {
    const { data } = await httpService.delete(usersEndpoint + id)
    return data
  }
}

export default userService
