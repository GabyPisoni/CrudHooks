import React , {useState}from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
const [users,setUsers] = useState(usersData);
const [edit, setEdit] = useState(false);
const [currentUser, setCurrentUser] = useState({
  id: null , name :"" , username: ""
})
const addUser = (user)=>{
  user.id=   uuidv4();
  setUsers([...users , user])
}
const editUser = (user) => {
  setEdit(true)
  setCurrentUser({ id : user.id , name : user.name , username : user.username})
}
const updateUsers = ( id, updateUser) =>{
  setEdit(false);
  setUsers(users.map(user => {  return user.id === id ? updateUser : user}))

}
const deleteUser = (id) =>{
  const indice = id;
  const deleteser = users.filter(element => { 
   return element.id !== indice
  })
setUsers(deleteser)
} 
  return (
    <div className="container">
    <h1>Crud Hooks</h1>
    <div className="flex-row">
      <div className="flex-large">
        { edit ?( <div><h2>Editar Usuarios</h2>
        <EditUserForm currentUser={currentUser} updateUsers={updateUsers}/> </div>)  : <div><h2>Agregar Usuarios</h2>
        <AddUserForm addUser={addUser}/> </div>
}        
      </div>
      <div className="flex-large">
        <h2>Lista de Usuarios</h2>
        <UserTable users={users} deleteUser={deleteUser}  editUser={editUser}/>
        
      </div>
    </div>
  </div>
  );
}

export default App;
