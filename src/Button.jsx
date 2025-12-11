import React from 'react'

const Button = (props) => {
  return (
   <button>{props.name}</button>
  )
}
//default props
// Button.defaultProps={
//     name:"default"
// }
// Button.propTypes={
//     name: PropTypes.String.isRequired
// }
export default Button