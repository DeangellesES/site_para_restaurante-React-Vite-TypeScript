import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cabecalho from './Components/Cabecalho'
import Rodape from './Components/Rodape'

import AppRoutes from './routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes></AppRoutes>
    </>
  )
}

export default App
