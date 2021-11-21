import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import professionService from "../services/profession.service"
import { toast } from "react-toastify"

const ProfessionContext = React.createContext()

export const useProfessions = () => {
  return useContext(ProfessionContext)
}

export const ProfessionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [professions, setProfessions] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getProfessions()
  }, [])

  useEffect(() => {
    toast.error(error)
  }, [error])

  function catchError(error) {
    const { message } = error.response.data
    setError(message)
    setIsLoading(false)
  }

  function getProfession(id) {
    return professions.find((prof) => prof._id === id)
  }

  async function getProfessions() {
    try {
      const { content } = await professionService.get()
      setProfessions(content)
      setIsLoading(false)
    } catch (error) {
      catchError(error)
    }
  }

  return (
    <ProfessionContext.Provider
      value={{ isLoading, professions, getProfession }}
    >
      {children}
    </ProfessionContext.Provider>
  )
}

ProfessionProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
