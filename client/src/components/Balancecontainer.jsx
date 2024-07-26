import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Balance } from './Balance'

function BalanceContainer() {
  const [balance, setBalance] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem('token') // Assuming you store the auth token in localStorage
        const response = await axios.get(
          'http://localhost:3000/api/v1/account/balance',
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request header
            },
          }
        )
        setBalance(response.data.balance)
      } catch (err) {
        console.error('Error fetching balance:', err)
        setError('Failed to fetch balance. Please try again.')
      }
    }

    fetchBalance()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (balance === null) {
    return <div>Loading balance...</div>
  }

  return <Balance value={balance} />
}

export default BalanceContainer
