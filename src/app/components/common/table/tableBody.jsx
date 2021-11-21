import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
  const renderContent = (user, column) => {
    if (columns[column].component) {
      const component = columns[column].component
      if (typeof component === "function") {
        return component(user)
      }
      return component
    }
    return _.get(user, columns[column].path)
  }

  return (
    <tbody>
      {data.map((user) => (
        <tr key={user._id}>
          {Object.keys(columns).map((column) => (
            <td key={column}>{renderContent(user, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableBody
