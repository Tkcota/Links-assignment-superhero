import "./App.css";
import Superheroes from "./Superheroes";
import {Route, Routes} from 'react-router-dom'
import PageWrapper from "./PageWrapper";
import Home from "./Home";
import MoviesForm from "./Movies/MovieForm";
import Movies from "./Movies/Movies";


function App() {
  return (
     <Routes>
       <Route element={<PageWrapper />}>
         <Route index element={<Home />} />
         <Route path='/superheroes' element={<Superheroes />} />
         <Route path='/movies' element={<Movies />}>
           <Route  index element={<Movies />}/>
           <Route  path='/movies/new' element={<MoviesForm />}/>
           <Route  path='/movies/edit/:id' element={<MoviesForm />}/>
         </Route>
       </Route>
     </Routes>
  );
}

export default App;





// import { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios'

// function App() {
//   const [superheroes, setSuperheroes] = useState([])
//   const [loading, setLoading] = useState(true)
//   useEffect(()=>{
//     getSuperheroes()
//   },[])

//   const getSuperheroes = async()=>{
//     try {
//       let res = await axios.get('/api/superheroes')
//       setSuperheroes(res.data)
//       setLoading(false)
//     } catch(err){
//       console.log(err)
//       setLoading(false)
//     }  
//   }

//   const renderSuperheroes = ()=>{
//     return superheroes.map(s=>{
//       return (
//         <div className='heroes'>
          
//           <h2>{s.name} : {s.power}</h2>
//         </div>
//       )
//     })
//   }
//   return (
//     <div className="App">
//       <h1 className='header'>Random Heroes</h1>
//       {renderSuperheroes()}
//     </div>
//   );
// }

// export default App;
