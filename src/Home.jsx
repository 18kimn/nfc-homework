import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div id="homepage">
      <Link to="/lockchain">
        <button>
          <p>Lockchain</p>
        </button>
      </Link>
      <Link to="/keyboard">
        <button>
          <p>Keyboard</p>
        </button>
      </Link>
    </div>
  )
}
export default Home
