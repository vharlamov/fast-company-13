import React from "react"
import PropTypes from "prop-types"
import { useQualities } from "../../../hooks/useQualities"

const Quality = ({ _id, color, name }) => {
  const { isLoading } = useQualities()
  return (
    <span className={"badge m-1 bg-" + color} key={_id}>
      {name}
    </span>
  )
}

Quality.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}

export default Quality
