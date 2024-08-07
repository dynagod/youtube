import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-zinc-900 flex items-center justify-center min-h-screen">
        <div className='bg-green-600 p-2 cursor-pointer inline-block rounded-lg'>Hello World !!</div>
      </div>
    </>
  )
}

export default App
