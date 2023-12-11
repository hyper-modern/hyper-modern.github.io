// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import Button from './Button'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <Button onClick={handleClick}>
        Clicked {count} times
      </Button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
