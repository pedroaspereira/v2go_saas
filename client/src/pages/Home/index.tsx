import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TaskModel } from '../../components/TaskModal'
import { AuthContext } from '../../context/AuthContext'
import { api } from '../../services/axios'
import { TasksStatusContainer, TaksStatusTable, TaskConcluded } from './styles'

export function Home() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('v2go.token')

    if (!token) {
      navigate('/login')
    }
  }, [])

  return (
    <div>
      <Summary />

      <TasksStatusContainer>
        <SearchForm />

        <TaksStatusTable>
          <tbody>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <tr>
                  <td width="50%">Matéria UOL</td>
                  <td>Mídia Esportiva</td>
                  <td>
                    <TaskConcluded variant="done">Entregue</TaskConcluded>
                  </td>
                  <td>13/04/2022</td>
                </tr>
              </Dialog.Trigger>
              <TaskModel />
            </Dialog.Root>

            <tr>
              <td width="50%">Matéria UOL</td>
              <td>Mídia Esportiva</td>
              <td>
                <TaskConcluded variant="doing">Executando</TaskConcluded>
              </td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TaksStatusTable>
      </TasksStatusContainer>
    </div>
  )
}
