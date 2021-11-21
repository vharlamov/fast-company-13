import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import userService from "../services/user.service"
import { toast } from "react-toastify"

const UsersContext = React.createContext()

export const useUsers = () => {
  return useContext(UsersContext)
}

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (error !== null) toast.error(error)
    setError(null)
  }, [error])

  async function getUsers() {
    try {
      const { content } = await userService.get()
      setUsers(content)
      setIsLoading(false)
    } catch (error) {
      catchError(error)
    }
  }

  function catchError(error) {
    const { message } = error.response.data
    setError(message)
    setIsLoading(false)
  }

  return (
    <UsersContext.Provider value={{ users }}>
      {!isLoading ? children : <p>Loading...</p>}
    </UsersContext.Provider>
  )
}

UsersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default UsersProvider
