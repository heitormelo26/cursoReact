import {Post} from './Post'
import { Header } from './components/Header'

import './global.css'

export function App() {

  return (
    <>

      <Header/>

      <Post 
        author='Heitor Melo'
        content = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repudiandae, veniam voluptatibus, qui voluptas, eum quos repellat libero ab hic in! Ipsa distinctio exercitationem in molestias deleniti numquam inventore iure.'
      />
    </>
    
  )
}


