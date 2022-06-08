import axios from "axios"
import { useState } from "react"

const UpdateSuperheroForm = (props)=>{
    const [name, setName] = useState(props.name)
    const [power, setPower] = useState(props.Power)


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          let res = await axios.put(`/api/superheroes/${props.id}`,{name, power})
          console.log(res)
          // res.data is the update superhero
          props.updateSuperhero(res.data)
        } catch(err){
          console.log(err)
        }

    }
    return (
        <div>
            <h1>Hero Form</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>power</p>
                <input type='string' value={power} onChange={(e)=>setPower(e.target.value)}/>
            </form>
        </div>
    )
}
export default UpdateSuperheroForm