import { useEffect, useState } from 'react'
import MainLayout from './views/layouts/demo-page'
import Controller from './views/components/other/controller'
import { useCall } from './hooks/CallHook/useCall'
import { onReloaded } from './ultils/helper'
import { useExposeToWindow } from './hooks/useExposeToWindow'

function App() {
  useEffect(() => {
    onReloaded();
  }, [])
  return (
    <div>
      <MainLayout />
      <Controller />
    </div>
  )
}

export default App
