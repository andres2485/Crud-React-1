import { UserTable } from "./Componentes/UserTable";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddUserForm } from "./Componentes/AddUserForm";
import { EditUserForm } from "./Componentes/EditUserForm";


function App() {

  const datosUsuario = [
    { id: uuidv4(), name: 'claudio', username: 'cquezada' },
    { id: uuidv4(), name: 'andres', username: 'agarcia' },
    { id: uuidv4(), name: 'chan', username: 'cchan' },
  ]
  //state
  const [users, setUsers] = useState(datosUsuario);


  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([

      ...users, user
    ])


  }


  const deleteUser=(id)=>{

console.log(id)

const arrayFiltrado = users.filter(user=>user.id !==id);
setUsers(arrayFiltrado)


  }

//Editar
const [editing, setEditing] = useState(false)


//mostrar el editado

const [currentUser, setCurrentUser] = useState({

  id:null,name:'',username:''
});

const editRow=(user)=>{

  setEditing(true)
setCurrentUser({

  id:user.id,name:user.name,username:user.username
})

}
//Mostrar actualizado
const updateUser=(id, updateUser)=>{

  setEditing(false)
  setUsers(users.map(users =>(users.id===id ? updateUser :users)))

}
    



  return (
    <div className='container mt-3'>

      <h1>Crud con Hooks</h1>
      <div className="flex-row">

        <div className='flex-large'>


          {
            editing ? (

              <div>
                <h2>Editar Usuario</h2>
                <EditUserForm  currentUser={currentUser} updateUser={updateUser}/>
              </div>

            ):(
                <div>
              <h2>Add Usuario</h2>
              <AddUserForm addUser={addUser} />
              </div>
            )

          }

         

        </div>

        <div className='flex-large'>
          <h2>Ver Usuarios</h2>
          <UserTable user={users} deleteUser={deleteUser}  editRow={editRow} />

        </div>
      </div>


    </div>
  );
}

export default App;
