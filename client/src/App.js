import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [superheroes, setSuperheroes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    getSuperheroes()
  },[])

  const getSuperheroes = async()=>{
    try {
      let res = await axios.get('/api/superheroes')
      setSuperheroes(res.data)
      setLoading(false)
    } catch(err){
      console.log(err)
      setLoading(false)
    }  
  }

  const renderSuperheroes = ()=>{
    return superheroes.map(s=>{
      return (
        <div className='heroes'>
          
          <h2>{s.name} : {s.power}</h2>
        </div>
      )
    })
  }
  return (
    <div className="App">
      <h1 className='header'>Random Heroes</h1>
      {renderSuperheroes()}
    </div>
  );
}

export default App;
