import React from 'react'

import ViewTODO from './components/ViewTODO'
import AddTODO from './components/addTODO'

function App() {
  return (
    <div className='bg-gray-400 w-screen h-screen flex flex-col p-10'>
    <p className='text-3xl text-center text-bold text-blue-900'>Todo App</p>
    <AddTODO />
    <ViewTODO/>
    </div>
    

  )
}

export default App