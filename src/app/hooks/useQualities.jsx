import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { toast } from "react-toastify"
import { qualityService } from "../services/quality.service"

const QualityContext = React.createContext()

export const useQualities = () => {
  return useContext(QualityContext)
}

export const QualityProvider = ({ children }) => {
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getQualities()
  }, [])

  useEffect(() => {
    toast.error(error)
  }, [error])

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  async function getQualities() {
    try {
      const { content } = await qualityService.get()
      setQualities(content)
      setIsLoading(false)
    } catch (error) {
      catchError(error)
    }
  }

  function getQuality(id) {
    return qualities.find((qual) => qual._id === id)
  }

  return (
    <QualityContext.Provider value={{ isLoading, qualities, getQuality }}>
      {!isLoading ? children : "Loading"}
    </QualityContext.Provider>
  )
}

QualityProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
