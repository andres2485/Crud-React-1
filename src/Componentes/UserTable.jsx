import React, { Fragment } from 'react'

export const UserTable = (props) => {
    console.log(props.user)
    return (

        <table>

            <thead>
                <tr>

                    <th>Nombre</th>
                    <th>Nombre de Usuario</th>
                    <th>Accion</th>


                </tr>


            </thead>
            <tbody>

                {
                    props.user.length > 0 ?
                    props.user.map(user => (

                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className='button muted-button' onClick={()=>{props.editRow(user)}}>Editar</button>

                                <button className='button muted-button' onClick={()=>{props.deleteUser(user.id)}}>Borrar</button>
                            </td>



                        </tr>

                    )):(
                        <tr>
                                <td colSpan={3}>No Usuario</td>

                        </tr>

                    )


                }

            </tbody>

        </table >


    )
}
