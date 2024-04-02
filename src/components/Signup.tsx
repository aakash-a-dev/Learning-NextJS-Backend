import axios from 'axios';
import React, { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
 <div className='flex flex-col justify-center h-screen'>
          <div className='flex justify-center '>
              <div className='border rounded '>
                  <input onChange={(e) => {
                      setUsername(e.target.value)
              }} type="text" placeholder='username' />
              <br />
              <br />
                  <input  onChange={(e) => {
                      setPassword(e.target.value)
              }} type="password" placeholder='password' />
                  <br />
                  <br />
                  <div className="flex mt-4 justify-center">
                      <button onClick={() => {
                          axios.post("http://localhost:3000/api/user", {
                              username,
                              password
                          })
                      }}>Signup</button>
                      </div>
                  </div>
    </div>
    </div>
  )
}
