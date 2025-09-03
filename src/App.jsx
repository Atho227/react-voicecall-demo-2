import { useEffect, useState } from 'react'
import MainLayout from './views/layouts/demo-page'
import Controller from './views/components/other/controller'
import LeftSideBar from './views/drawer/LeftSideBar'
import { onReloaded } from './ultils/helper'
import CallHistory from './views/drawer/CallHistory'

function App() {
  useEffect(() => {
    onReloaded();
  }, [])
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '64px', minHeight: '100vh' }}>
      <LeftSideBar />
      <MainLayout />
      <CallHistory />
      {/* <Controller /> */}
    </div>
  )
}

export default App
