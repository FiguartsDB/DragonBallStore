import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="not-found">
    <h1>
      Pagína no encontrada ❌ {' '}
      <Link to='/'>
        go home
      </Link>
    </h1>
  </div>
)
export default NotFound;