import axios from "axios"
import { useEffect, useState } from "react"
import Movie from "./Movie"

const Movies = () => {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        try {
            let res = await axios.get('/api/movies')
            setLoading(false)
            setMovies(res.data)
        } catch (err) {
            alert('err')
            setLoading(false)
        }
    }

    const deleteMovie = async (id) => {
        try {
            console.log(id)
            let res = await axios.delete(`/api/movies/${id}`);
            console.log(res)
            let newMovies = movies.filter((d) => d.id !== res.data.id);
            setMovies(newMovies);
        } catch (err) {
            alert("err occured");
        }
    };

    const renderMovies = () => {
        if (loading) {
            return <p>Loading Stuff</p>
        }

        return movies.map((m) => {
            return (
                <div className="box">
                    <Movie key={m.id} {...m} deleteMovie={deleteMovie} />
                </div>
            )
        });
    };




    return (
        <div>
            <h1>Movies</h1>
            <div className="super">{renderMovies()}</div>
        </div>
    )
}

export default Movies