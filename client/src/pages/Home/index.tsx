import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TasksStatusContainer, TaksStatusTable, TaskConcluded } from './styles'

export function Home() {
  return (
    <div>
      <Summary />

      <TasksStatusContainer>
        <SearchForm />

        <TaksStatusTable>
          <tbody>
            <tr>
              <td width="50%">Matéria UOL</td>
              <td>Mídia Esportiva</td>
              <td>
                <TaskConcluded variant="done">Entregue</TaskConcluded>
              </td>
              <td>13/04/2022</td>
            </tr>
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
