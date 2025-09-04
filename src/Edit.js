import React, { use, useState, useEffect } from 'react'
import { getFirestore, database, doc, updateDoc, collection, auth } from "./firebaseConfig";
import { getDoc, onSnapshot, query } from 'firebase/firestore';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const Edit = () => {

  const [pesquisa, setPesquisa] = useState([])
  const [estado, setEstado] = useState('')
  const [input, setInput] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const name = collection(database, "Cliente")

  useEffect(() => { //da o get
    onSnapshot(name, (query) => {
      const list = []
      query.forEach((doc) => {
        const docData = doc.data();
        list.push({ ...docData, id: doc.id })
      })
      setPesquisa(list)
    })
  }, [])


  useEffect(() => { //confirmação no console.log de que o login está certo (apenas para fins de entender o que está acontecendo)
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(database, "users", user.uid)
        try {
          const docSnap = await getDoc(docRef)
          console.log(docSnap.data())
        } catch (e) {
          console.log(e)
        }
      }
    })
  }, [])

  function edit(id) {
    try {
      const clienteRef = doc(database, "Cliente", id)
      updateDoc(clienteRef, {
        cliente: input
      })
    }
    catch (e) {
      console.log("erro: ", e)
    }

  }

  async function logar() {
    try {
      await signInWithEmailAndPassword(auth, login, password)
      console.log('logou')

    }
    catch (e) {
      console.log('não foi possível logar')
      console.log(e)
    }
  }

  function logout() {
    try {
      signOut(auth)
      console.log("deslogou")
    } catch (e) {
      console.log("erro ao deslogar: ", e)
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
          <input placeholder='login' onChange={(e) => setLogin(e.target.value)} />
        </div>
        <div>
          <input placeholder='senha' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={() => logar()}>login</button>
        <button onClick={() => logout()}>logout</button>
      </div>
    </div>
  )
}

export default Edit