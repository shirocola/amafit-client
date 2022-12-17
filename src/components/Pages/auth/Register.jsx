import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../../functions/auth'

//Redux
import { useCallback } from 'react';
import FileUpload from './FileUpload';


const Register = () => {
    const navigate = useNavigate(); 

    const [value, setValue] = useState({
        username: "",
        password: "",
        password1: "",
        fisrtname: "",
        lastname: "",
        displayname: "",
        height: "",
        weight: "",
        address: "",
        images: []
    })

    const OnLoginClick = useCallback(()=>{
        navigate('../')
    }, [navigate])


    const handleChange  = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
            })
    }

    console.log(value)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        if(value.password !== value.password1){
            alert("Password not match")
        }  else {
            register(value)
            .then((res)=>{
                console.log(res)
                alert(res.data)
            })
            .catch((err)=> {
                console.log(err.response.data)
                alert(err.response.data)
            })
        }
    };

  return (
    <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange}/>

            <label>Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            <br />
            <label>Confirm Password</label>
            <input type="password" name="password1" onChange={handleChange}/>
            <br />
            <label>Name</label>
            <input type="text" name="firstname" onChange={handleChange}/>
            <br />
            <label>Lastname</label>
            <input type="text" name="lastname" onChange={handleChange}/>
            <br />
            <label>Display name</label>
            <input type="text" name="displayname" onChange={handleChange}/>
            <br />
            <label>Height</label>
            <input type="number" name="height" onChange={handleChange}/>
            <br />
            <label>Weight</label>
            <input type="number" name="weight" onChange={handleChange}/>
            <br />
            <label>Address</label>
            <input type="text" name="address" onChange={handleChange}/>
            <br />

            < FileUpload value={value} setValue={setValue}/>

            <button className = 'confirm' disabled={value.password.length < 8}>Confirm</button>
            <button className='cancel'onClick = {OnLoginClick}>Cancel</button>
            
        </form>
    </div>
  )
}

export default Register