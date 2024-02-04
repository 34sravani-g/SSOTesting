import React, { useState } from 'react'
import Login from '../components/Login'
import Home from '../components/Home'

interface User {
  username: string
  password: string
  user_id: string
}

const IndexPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (username: string, password: string) => {
    const Credentials: User[] = [
      { username: 'John', password: 'password1', user_id: 'XT2-Y3D' },
      { username: 'Jane', password: 'password2', user_id: 'T4S-7YX' },
      { username: 'Jack', password: 'password3', user_id: 'ABC-123' },
    ]

    const validUser = Credentials.find(cred => cred.username === username && cred.password === password)

    if (validUser) {
      setUser(validUser)
    } else {
      alert('Invalid credentials. Please try again.')
    }
  }

  const handleLogout = () => {
    setUser(null)
  }

  return <div>{user ? <Home username={user.username} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}</div>
}

export default IndexPage
