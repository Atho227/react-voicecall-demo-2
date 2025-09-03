import { useEffect, useState } from 'react'
import MainLayout from './views/layouts/demo-page'
import Controller from './views/components/other/controller'
import LeftSideBar from './views/drawer/LeftSideBar'
import { onReloaded } from './ultils/helper'

function App() {
  useEffect(() => {
    onReloaded();
  }, [])
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '64px' }}>
      <LeftSideBar />
      <MainLayout />
      <Controller />
    </div>
  )
}

export default App
