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
// import capaImage from '../../assets/capaImage.jpeg'

const loginFormValidationSchema = zod.object({
  email: zod.string().email({ message: 'Insira um e-mail válido' }),
  password: zod.string().min(7).max(60),
})

type LoginFormData = zod.infer<typeof loginFormValidationSchema>

export function Login() {
  // const [] = useState()
  const { register, handleSubmit, watch, reset } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleLogin(data: any) {
    console.log(data)
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
