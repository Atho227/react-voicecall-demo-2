import { Suspense, useEffect } from 'react'
import { onReloaded } from '../ultils/helper'

import LoadingSpinner from '../components/other/LoadingSpinner'
import MainLayout from '../layouts/MainLayout'
import MainView from '../views/layouts/demo-page'

function App() {
  useEffect(() => {
    onReloaded();
  }, [])

  let renderContent
  renderContent = <MainView />

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <MainLayout mainContent={renderContent} />
      </Suspense>
    </div>
  )
}

export default App
