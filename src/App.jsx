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
    <div>
      <LeftSideBar />
      <MainLayout />
      {/* <Controller /> */}
    </div>
  )
}

export default App
