import { Link } from "react-router-dom"

const Movie = ({id, title, quote, deleteMovie})=>{
    return (
        <div className="component">
          <p>id:{id}</p>
          <p>title:{title}</p>
          <p>quote:{quote}</p>
          <button onClick={()=>{deleteMovie(id)}}>Delete</button>
          <Link to={`/Movies/edit/${id}`}>update</Link>
        </div>
    )
}
export default Movie