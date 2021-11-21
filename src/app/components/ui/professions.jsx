import React from "react"
import { useProfessions } from "../../hooks/useProfessions"
import PropTypes from "prop-types"

const Profession = ({ id }) => {
  const { isLoading, getProfession } = useProfessions()
  const prof = getProfession(id)
  return isLoading ? <p>Loading...</p> : <p>{prof.name}</p>
}

Profession.propTypes = {
  id: PropTypes.string
}

export default Profession
