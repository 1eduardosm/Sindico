import React, { use, useState } from 'react'
import { getFirestore, database, doc, updateDoc, collection } from "./firebaseConfig";
import { onSnapshot, query } from 'firebase/firestore';



const Edit = () => {

  const [pesquisa, setPesquisa] = useState([])
  const [estado, setEstado] = useState('')
  const [input, setInput] = useState('')

  const name = collection(database, "Cliente")

    onSnapshot(name, (query) => {
      const list = []
      query.forEach((doc) => {
        const docData = doc.data();
        list.push({ ...docData, id: doc.id })

      })
      setPesquisa(list)
    })

    function edit(id) {
      const clienteRef = doc(database, "Cliente", id)
      updateDoc(clienteRef, {
        cliente: input
      })

    }

  return (
    <div>
      ------get------ (clica em um nome pra selecionar qual vai editar, digita no input e clica no botão que deve editar)
      {pesquisa.map(item => (
        <div id={item.id} onClick={() => setEstado(item.id)}>
          {item.cliente}
        </div>
      ))}
      <br></br>
      ------put------
      <div>
        <input placeholder='nome' onChange={(e) => setInput(e.target.value)} />
      </div>
      <button onClick={() => edit(estado)}>editar</button>
    </div>
  )
}

export default Edit