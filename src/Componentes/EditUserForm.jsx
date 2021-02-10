import React from 'react'
import { useForm } from 'react-hook-form';

export const EditUserForm = (props) => {

    console.log(props.currentUser)


    const { register, errors, handleSubmit ,setValue} = useForm({

defaultValues:props.currentUser

    });

    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.username);

    const onSubmit = (data, e) => {

        console.log(data)
        data.id=props.currentUser.id
props.updateUser(props.currentUser.id,data)
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
            <button>Editar Usuario</button>
        </form>

    )
}
