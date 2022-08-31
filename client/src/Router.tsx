import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { UserInputLayout } from './layouts/UserInputLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Payments } from './pages/Payments'
import { Profile } from './pages/Profile'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/" element={<UserInputLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
