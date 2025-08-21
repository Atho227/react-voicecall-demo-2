import { useEffect, useState } from 'react'
import MainLayout from './views/layouts/demo-page'
import Controller from './views/components/other/controller'
import { useCall } from './hooks/CallHook/useCall'

function App() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpcHBob25lIjoiNTAwMCJ9.HppfyaTz5mxaKac9W_hpPjd0aziLiHFNOhzKsggI66A"
  const domain = "vi2"

  useEffect(() => {
    csInit(token, domain)
  }, [])

  const { setPermission, setOnline } = useCall();
  useEffect(() => {
    window.setPermission = setPermission;
    return () => {
      delete window.setPermission;
    };
  }, [setPermission]);

  useEffect(() => {
    window.setOnline = setOnline;
    return () => {
      delete window.setOnline;
    };
  }, [setOnline]);
  return (
    <div>
      <MainLayout />
      <Controller />
    </div>
  )
}

export default App
