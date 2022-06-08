import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SuperheroForm from "./SuperheroForm";
import UpdateSuperheroForm from "./UpdateSuperheroForm";

function Superheroes() {
  const [superheroes, setSuperheroes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSuperheroes();
  }, []);

  const addSuperhero = (superhero) => {
    setSuperheroes([superhero, ...superheroes]);
  };

  const getSuperheroes = async () => {
    try {
      let res = await axios.get("/api/superheroes");
      console.log("res", res);
      setSuperheroes(res.data);
      setLoading(false);
    } catch (err) {
      alert("error occured");
      setError(err);
      setLoading(false);
    }
  };

  const deleteSuperhero = async (id) => {
    try {
      let res = await axios.delete(`/api/superheroes/${id}`);
      let newSuperheroes = superheroes.filter((d) => d.id !== res.data.id);
      setSuperheroes(newSuperheroes);
    } catch (err) {
      alert("err occured");
    }
  };

  const updateSuperhero = (superhero) => {
    let updatedSuperheroes = superheroes.map((d) => (d.id === superhero.id ? superhero : d));
    setSuperheroes(updatedSuperheroes);
  };

  const renderSuperheroes = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
    return superheroes.map((d) => {
      return (
        <div key={d.id} style={{ margin: "20px", border: "1px solid" }}>
          <h1>
            {d.name}: ${d.price}
          </h1>
          <p>{d.description}</p>
          <button onClick={() => deleteSuperhero(d.id)}>delete</button>
          <UpdateSuperheroForm {...d} updateSuperhero={updateSuperhero} />
        </div>
      );
    });
  };

  return (
    <div className="component superheroes">
      <SuperheroForm addSuperhero={addSuperhero} />
      <h1>superheroes</h1>
      <div>{renderSuperheroes()}</div>
    </div>
  );
}

export default Superheroes;
