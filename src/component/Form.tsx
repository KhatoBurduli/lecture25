import React, { useId } from 'react'

const Form:React.FC = () => {
    const id = useId()
  return (
    <div>
        <label htmlFor={id}>label</label>
        <input type="text" id={id}/>
    </div>
    
  )
}

export default Form