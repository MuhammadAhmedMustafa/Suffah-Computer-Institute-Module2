import React  from 'react'
import Gallery from './components/Gallery.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'
// function App() { //functional component
// component name fisrtletter should be in capital
// //jsx
//   return (
//     <div className="main">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     </div>
//   )
// }



const App = () =>{
  return(
    <React.Fragment>
    <h1>First Gallery</h1>
    <Gallery />
    <h1>Second Gallery</h1>
    <Gallery />
    <h1>Todo List</h1>
    <TodoList />
    </React.Fragment>
  )
}

export default App
