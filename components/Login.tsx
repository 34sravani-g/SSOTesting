import React, { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'

interface LoginProps {
  onLogin: (username: string, password: string) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }): JSX.Element => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(username, password)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <form method="POST" action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username">Enter Username</Label>
            <TextInput
              id="username"
              type="text"
              required={true}
              shadow={true}
              name="username"
              value={username}
              className="border border-black"
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password2">Enter Password</Label>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
              name="password"
              value={password}
              className="border border-black"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" style={{ backgroundColor: '#01bbb3' }} className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
