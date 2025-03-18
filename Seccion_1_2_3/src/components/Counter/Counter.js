import React, { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <section>
      <button onClick={()=> setCounter( counter + 1 ) }>Click</button>
      <p>Clicked {counter}!</p>
    </section>
  )
}
