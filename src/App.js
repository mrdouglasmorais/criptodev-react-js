import { useState } from "react";
import {  api } from './service/api'

const App = () => {
  const [ data, setData ] = useState({})
  const [ showForm, setShowForm ] = useState(true)

  const submitData = (e) => {
    e.preventDefault();
    api.post("", data).then(
      res => {
        if (res.status === 200 || 201){
          setShowForm(false)
        }
      }
    )
  }

  if(!showForm){
    return(
      <div>
        <h2>Dados enviados com sucesso!</h2>
      </div>
    )
  }
  return(
    <div>
      <h1>Hello World!!!</h1>
      <form onSubmit={submitData}>
        <input 
          type="text" 
          placeholder="Informe seu nome"
          onChange={ e => setData({ ...data, name: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Informe seu telefone"
          onChange={ e => setData({ ...data, phone: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Informe seu email"
          onChange={ e => setData({ ...data, email: e.target.value })}
        />
        <input 
          type="submit" 
          value="Cadastrar"
        />
      </form>
      <div>
        <p>{data?.name}</p>
      </div>
    </div>
  )
}

export default App;