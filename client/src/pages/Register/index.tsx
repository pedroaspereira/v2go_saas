// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  FormContainer,
  RegisterContainer,
  RegisterInput,
  SubmitRegisterButton,
} from './styles'
import logoV2go from '../../assets/logoV2go.jpeg'
import { api } from '../../lib/axios'

const registerFormValidationSchema = zod
  .object({
    email: zod.string().email({ message: 'Insira um e-mail válido' }),
    password: zod.string().min(7).max(60),
    confirm: zod.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Password dont match',
    path: ['confirm'],
  })

type RegisterFormData = zod.infer<typeof registerFormValidationSchema>

export function Register() {
  // const [] = useState()
  const { register, handleSubmit, watch, reset } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
    },
  })

  async function handleRegister(data: any) {
    const { email, password } = data
    try {
      const response = await api.post('/api/register', {
        email,
        password,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
    reset()
    reset()
  }

  const password = watch('password')
  const isSubmitDisabled = !password

  return (
    <RegisterContainer>
      <FormContainer>
        <img src={logoV2go} alt="" height={100} width={100} />
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(handleRegister)} action="">
          <RegisterInput
            id="email"
            type="text"
            placeholder="E-mail"
            {...register('email')}
          />
          <RegisterInput
            id="password"
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          <RegisterInput
            id="password"
            type="password"
            placeholder="Confirme sua Senha"
            {...register('confirm')}
          />

          <SubmitRegisterButton type="submit" disabled={isSubmitDisabled}>
            Entrar
          </SubmitRegisterButton>
        </form>
      </FormContainer>
    </RegisterContainer>
  )
}
