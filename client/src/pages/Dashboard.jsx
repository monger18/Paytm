import React from 'react'
import { Appbar } from '../components/Appbar'
import BalanceContainer from '../components/Balancecontainer'
import { Users } from '../components/Users'

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <div>
        <BalanceContainer />
        <Users />
      </div>
    </div>
  )
}
