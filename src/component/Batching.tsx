import React, { useState } from 'react'

const Batching:React.FC = () => {
    const [value, setValue] = useState(0)
    const [state, setState] = useState('A')

    console.log('render')

    const updateState = () => {
        // fetch('https://jsonplaceholder.typicode.com/users').then(() => {
        //     setValue(prev => prev + 1)
        //     setState(prev => prev + 'A')
        // })
        setTimeout(() => {
            setValue(prev => prev + 1)
            setState(prev => prev + 'A')
        }, 1000)

        // Promise.resolve().then(() => {
        //     setValue(prev => prev + 1)
        //     setState(prev => prev + 'A')
        // })
    }

  return (
    <div>
        <h1>{value}</h1>
        <h1>{state}</h1>
        <button onClick={updateState}>BUTTON</button>
    </div>
  )
}

export default Batching