import React from 'react'
import { useForm } from 'react-hook-form';

export const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {

        console.log(data)
        props.addUser(data)
        e.target.reset();
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label >Nombre</label>
            <input type="text" name='name' ref={

                register({

                    required: { value: true, message: 'Campo Requerido' }
                })
            } />
            <div>

                {errors?.name?.message}
            </div>
            <label >Nombre de Usuario</label>
            <input type="text" name='username' ref={

                register({

                    required: { value: true, message: 'Campo Requerido' }
                })
            } />

            <div>

                {errors?.username?.message}
            </div>
            <button>Agregar Nuevo usuario</button>
        </form>

    )
}
