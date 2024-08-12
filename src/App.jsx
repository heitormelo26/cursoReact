import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Post} from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Hello word</h1>
      
      <Post 
        author='Heitor Melo'
        content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repudiandae, veniam voluptatibus, qui voluptas, eum quos repellat libero ab hic in! Ipsa distinctio exercitationem in molestias deleniti numquam inventore iure.'
      />
    </>
    
  )
}


