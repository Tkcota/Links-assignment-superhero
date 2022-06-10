import { Link, Outlet } from "react-router-dom"

const MovieUpdate = ()=>{
    return (
      <div className="super">
      <h1>{id ? "Edit" :"New"} Movie</h1>
      <form onSubmit={handleSubmit}>
          <p>title</p>
          <input value={title} onChange={(e)=> setTitle(e.target.value)} />
          <p>quote</p>
          <input value={quote} onChange={(e)=> setQuote(e.target.value)} />
          <button> {id ? "update" : "create"}</button>
      </form>
  </div>
    )
}

export default MovieUpdate