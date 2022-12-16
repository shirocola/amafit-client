import { getStyleValue } from '@mui/system';
import React, {useState, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Pages/auth/Login';
import './LoginForm.css';

// Functions
import { login } from '../functions/auth'

//Redux
import { useDispatch } from 'react-redux';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [value, setValue] = useState({
    username: "",
    password: "",
  })

  const roleBasedRedirect = (role) => {
    if (role === "admin") {
      navigate('/admin/index')
    } else {
      navigate('/user/index')  
    }
  }
  
  // const navigate = useNavigate();

  const onRegisterClick = useCallback(()=>{
    navigate('../register')
  }, [navigate])

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(value)
    
    login(value)
      .then((res)=> {
        console.log(res.data)
        alert(res.data)
        
        dispatch({
          type:'LOGIN',
          payload:{
            token: res.data.token,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          }
        })

        localStorage.setItem('token',res.data.token)
        roleBasedRedirect(res.data.payload.user.role)
      })
      .catch((err)=> {
        console.log(err.response.data)
        alert(err.response.data)
      })
  }

  return (
    <div className="login-page">
      <img className="icon" alt="" src="../-6@2x.png" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input type="email" id="username" name="username" onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={handleChange}/>

        <button className='sign-in' type="submit">sign in</button>
        <button className= 'register' onClick = {onRegisterClick} type="submit">register</button>
        <p >forgot password?</p>

      </form>
    </div>
  );
}

export default LoginForm;