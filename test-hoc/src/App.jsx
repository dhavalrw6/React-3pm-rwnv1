import React from 'react'
import HocFunc from './utils/HocFunc'
import Dashboard from './components/Dashboard'

function App() {

  let AuthDashboard = HocFunc(Dashboard);

  return (
    <>
      <AuthDashboard/>
    </>
  )
}

export default App
