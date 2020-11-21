import React from 'react';
import { useForm } from 'react-hook-form'

const AddUserForm = ({addUser}) => {

    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data,e) =>{
            addUser(data);
        e.target.reset()
    }

    return ( <form onSubmit={handleSubmit(onSubmit)} >
            <label>Nombre</label>
            <input type="text" name="name" placeholder="ingrese un nombre" ref={register(
                {required: {value:true, message:"Campo nombre requerido"}, 
                maxLength:{value:25,message:"Maximo de nombre de caracteres es 25"},
                minLength:{value:3,message:"El minimo de nombre de caracteres de nombre es de 3 "}
                })}/>
            <div>{errors?.name?.message}</div>
            <label>Nombre de Usuario</label>
            <input type="text" name="username" placeholder="ingrese un nombre" ref={register({
            required: {value:true, message:"Campo  nombre de usuario requerido"} ,
            maxLength:{value:17,message:"Maximo nombre de usuario de caracteres es 17"},
            minLength:{value:6,message:"El minimo de caracteres de nombre de usuario  es de 6 "}
            })}/>
            <div>{errors?.username?.message}</div>
            <button>Añadir usuario</button>

    </form> );
}
 
export default AddUserForm;