import axios from "axios"
import { useEffect, useState } from "react"
import Movie from "./Movie"

const Movies = ()=>{
     const [movies, setMovies] = useState(null)
     const [loading, setLoading] = useState(true)

     useEffect(()=>{
        getMovies()
     },[])

     const getMovies = async()=>{
        try{
          let res = await axios.get('/api/movies')
          setLoading(false)
          setMovies(res.data)
        }catch(err){
            alert('err')
            setLoading(false)
        }
     }

     const renderMovies = ()=>{
         if(loading){
             return <p>Loading Stuff</p>
         }

         return movies.map(t=> <Movie key={t.id} {...t}/>)
     }
     
    
    return (
        <div className="component">
            <h1>Movies</h1>
            {renderMovies()}
        </div>
    )
}

export default Movies