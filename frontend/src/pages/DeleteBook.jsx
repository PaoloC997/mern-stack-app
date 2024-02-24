import React, { useState, useEffect} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

function DeleteBook() {

  const [loading, setLoading] = useState(false)
  const  navigate  = useNavigate()

   const { id } = useParams()

  useEffect(()=>{

    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')

      })
      .catch((error) => {
        setLoading(false)
        alert('An error happened you silly goose. Check the console for more details about where you goosery went belly up')
        console.log(error)
      })


  }, [])

  return (
    <div className='p-4'>
      {loading ? <Spinner /> : ''}
    </div>
  )
 
}

export default DeleteBook