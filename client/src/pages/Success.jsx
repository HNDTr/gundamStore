import React from 'react'
import { useLocation } from 'react-router-dom'

function Success() {
    const location = useLocation()
  return (
    <div>
        successful
    </div>
  )
}

export default Success