import React, { useState }  from 'react'
import {meals} from "./data/data"
// const App = () =>{
//   return(
//    <>
//    <p>App compo...</p>
//    </>
//   )
// }
// export default App

// import FancyText from './components/FancyText';
// import InspirationGenerator from './components/InspirationGenerator';
// import Copyright from './components/Copyright';

// export default function App() {
//   return (
//     <>
//       <FancyText title text="Get Inspired App" />
//       <InspirationGenerator>
//         <Copyright year={2004} />
//       </InspirationGenerator>
//     </>
//   );
// }

// import { sculptureList } from './data/data';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const hasNext = index < sculptureList.length - 1;

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }
//   function handlePrevClick() {
//     if (hasNext && index ) {
//       setIndex(index - 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   console.log(sculpture);
//   return (
//     <>
//     {index}
//       <button onClick={handlePrevClick}>
//         Previous
//       </button>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }




// export default function App (){
//   const [todos,setTodos] = useState([]);
//   const [todo,setTodo] = useState();
//   const addTodo= () =>{
//     let tempArr = [...todos];
//     tempArr.push(todo)
//     setTodos(tempArr);
//   }
//   return(
//     <>
//     <input type="text" name="todo" id="_todo" 
//     onChange={(e)=>{
//       setTodo(e.target.value)
//     }} />


    
//     <button onClick={()=>{addTodo()}}>Add todo</button>
//     <ul>
//       {
//         todos.map(item => <li>{item}</li>)
//       }
//     </ul>
//     </>
//   )
// }

export default function App(){
  const mealsList = meals;
  const [recipeName,setRecipeName] = useState();
  const [recipeDetails,setRecipeDetails] =useState([]);
  const [flag , setFlag] = useState(false);
  console.log(mealsList);
 
  const searchRecipe = ()=>{
    const recipeDetail = mealsList.filter(item =>
      item.name === recipeName
    );
    recipeDetail.length <=0 ? setFlag(true) : setFlag(false) 
    setRecipeDetails(recipeDetail)
    console.log(recipeDetail);
  }
 return(
 <>
    <input type="text" name="todo" id="_todo" 
    
    onChange={(e)=>{
      const val= e.target.value.toLocaleLowerCase();
      setRecipeName(val)
    }} />    



    <button onClick={()=>{searchRecipe()}}>Search Recipe</button>
    {
 recipeDetails.length > 0 ?
<>
<h3>Recipe Details</h3>
  <ul>
   <li>{recipeDetails[0].name}</li>
   <li>{recipeDetails[0].recipe}</li>
</ul>
</>
:null
}
{
 flag && 
 <p> Recipe not found </p> 
}




  </>
  )
}





