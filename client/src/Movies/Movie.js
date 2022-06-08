import { Link } from "react-router-dom"

const Movie = ({id, title, quote})=>{
    return (
        <div className="component">
          <p>id:{id}</p>
          <p>title:{title}</p>
          <p>quote:{quote}</p>
          <button>delete</button>
          <Link to={`/Movies/edit/${id}`}>update</Link>
        </div>
    )
}
export default Movie