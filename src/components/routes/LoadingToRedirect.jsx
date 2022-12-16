import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToReDirect = () => {
    const [ count, setCount ] = useState(3)
    const navigate = useNavigate()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000)
        count === 0 && navigate('/')

        return () => clearInterval(interval)

    },[count])

    

  return (
    <div>
        <h1>No Permission, redirect in {count}</h1>
    </div>
  )
}

export default LoadingToReDirect