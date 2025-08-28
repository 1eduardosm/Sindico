import React, { use, useState } from 'react'
import { getFirestore, database, doc, updateDoc, collection } from "./firebaseConfig";
import { onSnapshot, query } from 'firebase/firestore';
import { auth, onAuthStateChanged} from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Edit = () => {

  const [pesquisa, setPesquisa] = useState([])
  const [estado, setEstado] = useState('')
  const [input, setInput] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

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
  
  async function logar() {
    try {
      await signInWithEmailAndPassword(auth, login, password)
    }
    catch{
      console.log('não foi possível logar')
    }
  }

  return (
    <div>
      ------get------ 
      {pesquisa.map(item => (
        <div id={item.id} onClick={() => setEstado(item.id)}>
          {item.cliente}
        </div>
      ))}
      ------put------
      <div>
        <input placeholder='nome' onChange={(e) => setInput(e.target.value)} />
      </div>
      <button onClick={() => edit(estado)}>editar</button>
      <div>
        login
        <div>
          <input placeholder='login' onChange={(e) => setLogin(e.target.value)}/>
        </div>
        <div>
          <input placeholder='senha' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button onClick={() => logar()}>logar</button>

      </div>
    </div>
  )
}

export default Edit