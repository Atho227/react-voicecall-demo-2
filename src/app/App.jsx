import { Suspense, useEffect, useState } from 'react'
import { onReloaded } from '../ultils/helper'

import MainLayout from '../views/layouts/demo-page'
import LoadingSpinner from '../components/other/LoadingSpinner'
import MainView from '../views/MainView/MainView'

function App() {
  useEffect(() => {
    onReloaded();
  }, [])

  let renderContent
  renderContent = <MainView />

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <MainLayout mainContent={renderContent} />
      </Suspense>
    </>
  )
}

export default App
