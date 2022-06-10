import { Link } from "react-router-dom"

const Movie = ({id, title, quote, deleteMovie})=>{
    return (
        <div>
          <p>id:{id}</p>
          <p>title:{title}</p>
          <p>quote:{quote}</p>
          <button onClick={()=>{deleteMovie(id)}}>Delete</button>
          <button><Link to={`/MovieUpdate/edit/${id}`}>update</Link></button>
        </div>
    )
}
export default Movie