import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import { AuthProvider } from './features/auth/auth.context'  // ← add this
import "./features/shared/styles/global.scss"
import {SongProvider} from './features/home/song.context'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>                        {/* ← wrap here */}
      <SongProvider>                        {/* ← add */}
        <RouterProvider router={router} />
      </SongProvider>
    </AuthProvider>
  </StrictMode>,
)