import React  from 'react'
// import Gallery from './components/Gallery.jsx'
// import TodoList from './components/TodoList.jsx'
// import BioData from './components/BioData.jsx'
// import Country from './components/Country.jsx'
// import './App.css'
// // function App() { //functional component
// // component name fisrtletter should be in capital
// // //jsx
// //   return (
// //     <div className="main">
// //     <h1>Heading 1</h1>
// //     <h2>Heading 2</h2>
// //     </div>
// //   )
// // }



// const App = () =>{
//   const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
//   return(
//     <React.Fragment>
//     {/* <h1>First Gallery</h1>
//     <Gallery />
//     <h1>Second Gallery</h1>
//     <Gallery />
//     <h1>Todo List</h1>
//     <TodoList /> */}
//     {/* <BioData
//     bgColor="red"
//     /> */}
//         {/* <h1>{person.theme.color}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul> */}
//       <Country
//       name={"Pakistan"}
//       imageSrc={'https://www.worldometers.info//img/flags/small/tn_pk-flag.gif'}
//       population={1002121565}
//       noOfPorvinces={5}
//       />
//     </React.Fragment>
//   )
// }

// export default App
function Item({ name, isPacked ,importance }) {
//   if (isPacked) {
//   //  return <li className="item">{name} ✔</li>;
//   //  return null
// }
//   return <li className="item">{name}</li>;

// if (isPacked) {
//   return <li className="item">{name} ✔</li>;
// }
// return <li className="item">{name}</li>;

return (
  // <li className="item">{isPacked ? name + '✔' : name} </li>
  // <li className="item">{isPacked ?
  //   (
  //     <del>
  //       {name + ' ✔'}
  //     </del>
  //   )
  //   : name} </li>
  <li className="item">
  {name} 
  {/* {isPacked && '✔'}  {importance && <i>importance OT({importance})</i>} */}
  {/* {importance > 0 && ' '} */}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
</li>


)

}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit"
          importance={9} 
        />
        <Item 
          isPacked={false} 
          name="Helmet with a golden leaf" 
          importance={3}
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam"
          importance={0} 
        />
      </ul>
    </section>
  );
}


const App = () =>{

  return(
    <PackingList />
  )
}
export default App




