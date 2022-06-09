import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const MoviesForm = ()=>{
    const [title, setTitle] = useState('')
    const [quote, setQuote] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(id){
            getMovie()
        }
    },[])

    const getMovie = async()=>{
        try {
            let res = await axios.get(`/api/movies/${id}`)
            setTitle(res.data.title)
            setQuote(res.data.quote)
        } catch (error) {
            console.log('err')
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(id){
            await axios.put(`/api/movies${id}`,{title, quote})
            navigate('/movies')

        } else{
            await axios.put("/api/movies",{title, quote})
            navigate('/movies')
        }

    }
    return (
        <div className="super">
            <h1>{id ? "Edit" :"New"} Movie</h1>
            <form onSubmit={handleSubmit}>
                <p>title</p>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} />
                <p>quote</p>
                <input value={quote} onChange={(e)=> setQuote(e.target.value)} />
                <button> {id ? "update" :"create"}</button>
            </form>
        </div>
    )
}

export default MoviesForm