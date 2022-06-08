import axios from "axios"
import { useState } from "react"

const UpdateSuperheroForm = (props)=>{
    const [name, setName] = useState(props.name)
    const [price, setPrice] = useState(props.price)
    const [description, setDescription] = useState(props.description)

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
            <h1>Form Yo</h1>
            <form onSubmit={handleSubmit}>
                <p>name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>price</p>
                <input type='string' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <p>description</p>
                <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <button>submit</button>
            </form>
        </div>
    )
}
export default UpdateSuperheroForm