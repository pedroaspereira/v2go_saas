// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  FormContainer,
  LoginContainer,
  LoginInput,
  SubmitLoginButton,
} from './styles'
import logoV2go from '../../assets/logoV2go.jpeg'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
// import capaImage from '../../assets/capaImage.jpeg'

const loginFormValidationSchema = zod.object({
  email: zod.string().email({ message: 'Insira um e-mail válido' }),
  password: zod.string().min(5).max(60),
})

type LoginFormData = zod.infer<typeof loginFormValidationSchema>

export function Login() {
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLogin(data: LoginFormData) {
    await signIn(data)
    navigate('/')
    reset()
  }

  const password = watch('password')
  const isSubmitDisabled = !password

  return (
    <LoginContainer>
      <FormContainer>
        <img src={logoV2go} alt="" height={100} width={100} />
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)} action="">
          <LoginInput
            id="email"
            type="text"
            placeholder="E-mail"
            {...register('email')}
          />
          <LoginInput
            id="password"
            type="password"
            placeholder="Password"
            {...register('password')}
          />

          <SubmitLoginButton type="submit" disabled={isSubmitDisabled}>
            Entrar
          </SubmitLoginButton>
        </form>
      </FormContainer>
    </LoginContainer>
  )
}
