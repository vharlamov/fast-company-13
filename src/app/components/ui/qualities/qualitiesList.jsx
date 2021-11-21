import React from "react"
import PropTypes from "prop-types"
import Quality from "./quality"
import { useQualities } from "../../../hooks/useQualities"

const QualitiesList = ({ qualities }) => {
  const { getQuality } = useQualities()

  const quals = qualities.map((qualId) => {
    return getQuality(qualId)
  })

  return (
    <>
      {quals.map((qual, i) => (
        <Quality key={i} {...qual} />
      ))}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array
}

export default QualitiesList
