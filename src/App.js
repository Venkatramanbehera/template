import React from 'react'
import { Link, Route } from 'react-router-dom'
import DragDropContainer from './components/DragDropContainer'

const App = (props) => {
  return (
    <div>
      <h3>Welcome to my template</h3>

      <Link to="/dragndrop">DragDrop</Link>

      <Route path="/dragndrop" component={ DragDropContainer } exact={ true }/>
    </div>
  )
}

export default App
