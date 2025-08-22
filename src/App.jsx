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

  const { setPermission, setOnline, startCall, acceptCall, CallEnded, receiveCall, updateCallInfo } = useCall();
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

  useEffect(() => {
    window.startCall = startCall;
    return () => {
      delete window.startCall;
    };
  }, [startCall]);
  useEffect(() => {
    window.acceptCall = acceptCall;
    return () => {
      delete window.acceptCall;
    };
  }, [acceptCall]);
  useEffect(() => {
    window.startCall = startCall;
    return () => {
      delete window.startCall;
    };
  }, [startCall]);
  useEffect(() => {
    window.CallEnded = CallEnded;
    return () => {
      delete window.CallEnded;
    };
  }, [CallEnded]);
  useEffect(() => {
    window.receiveCall = receiveCall;
    return () => {
      delete window.receiveCall;
    };
  }, [receiveCall]);
  useEffect(() => {
    window.updateCallInfo = updateCallInfo;
    return () => {
      delete window.updateCallInfo;
    };
  }, [updateCallInfo]);

  return (
    <div>
      <MainLayout />
      <Controller />
    </div>
  )
}

export default App
