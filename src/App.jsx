import React, { useState, useEffect} from 'react'
import './App.css'
// Pages
import Register from './components/Pages/auth/register'
import Login from './components/Pages/auth/Login'
import Profile from './components/Pages/auth/Profile'
import Dashboard from './components/Pages/auth/Dashboard'

// Components
import NavBar from './components/navbar/NavBar'

// V.6
import { Routes, Route} from 'react-router-dom'
// import LoginForm from './components/Login/LoginForm'

//pages admin
import HomeAdmin from './components/Pages/admin/Home'

//pages user
import HomeUser from './components/Pages/user/Home'

//functions
import { currentUser } from './components/functions/auth'

//Redux
import { useDispatch } from 'react-redux';

//Routes
import UserRoute from './components/routes/UserRoutes'

function App() {
  const dispatch = useDispatch()
  const idtoken = localStorage.token
  if (idtoken) {
    currentUser(idtoken)
    .then((res)=> {
      console.log(res.data)
      dispatch({
        type:'LOGIN',
        payload:{
          token: idtoken,
          username: res.data.username,
          role: res.data.role,
        }
      })
    }).catch(err => {
      console.log(err)
    })
  }
  
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* < Register /> */}
      <NavBar/>
      <Routes>
        <Route path="/register" element={< Register />}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={< Profile />}/>
        <Route path="/dashboard" element={< Dashboard />}/>
        


        <Route path="/admin/index" element={<HomeAdmin/>}/>

        <Route 
        path="/user/index" 
        element={
          <UserRoute>
            <HomeUser />
          </UserRoute>
        }/>

      </Routes>
    </div>
  )
}

export default App
