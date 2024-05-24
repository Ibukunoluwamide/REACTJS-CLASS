import React from 'react'

const Props = ({handleEdit,title}) => {
    // console.log(props);
  return (
    <div>
        <button onClick={handleEdit}>{title}</button>
    </div>
  )
}

export default Props