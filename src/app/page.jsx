import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <button>Button</button>
    </div>
  )
}

export default Home