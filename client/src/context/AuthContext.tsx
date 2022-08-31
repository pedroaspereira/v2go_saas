import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/axios'
import Cookies from 'js-cookie'

type User = {
  email: string
}

type SignCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignCredentials): Promise<void>
  user: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'v2go.token': token } = Cookies.get()

    if (token) {
      api.get('/logged-in-user').then((response) => {
        const { email } = response.data

        setUser({ email })
      })
    }
  }, [])

  async function signIn({ email, password }: SignCredentials) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      })
      const { token } = response.data

      setUser({
        email,
      })

      Cookies.set('v2go.token', token, {
        expires: 7,
        path: '/',
      })

      api.defaults.headers.common.authorization = `Bearer ${token}`
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
