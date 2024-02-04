import React from 'react'
import { Button } from 'flowbite-react'

interface HomeProps {
  username: string
  onLogout: () => void
}

const Home: React.FC<HomeProps> = ({ username, onLogout }): JSX.Element => {
  const handleHealthMachineLogin = () => {
    // Implementing HealthMachine login functionality
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
      <h1 className="text-2xl">Welcome {username}</h1>
      <Button
        type="button"
        onClick={handleHealthMachineLogin}
        style={{ backgroundColor: '#94CFD5' }}
        className="mt-4 p-2"
      >
        Log in to HealthMachine
      </Button>
      <Button type="button" onClick={onLogout} style={{ backgroundColor: '#01bbb3' }} className="mt-4 p-2">
        Logout
      </Button>
    </div>
  )
}

export default Home
