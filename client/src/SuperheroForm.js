import { useState } from "react"
import axios from 'axios'

const SuperheroForm = (props) => {
  const [name, setName] = useState('')
  const [power, setPower] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({name, power})
    try {
      let res = await axios.post('/api/superheroes', { name, power })
      props.addSuperhero(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Superhero Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <p>Power</p>
        <input value={power} onChange={(e)=>setPower(e.target.value)} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SuperheroForm