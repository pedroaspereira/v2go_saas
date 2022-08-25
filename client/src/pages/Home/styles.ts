import styled from 'styled-components'

export const TasksStatusContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`
export const TaksStatusTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`
interface TaskConcludedProps {
  variant: 'done' | 'doing'
}

export const TaskConcluded = styled.span<TaskConcludedProps>`
  color: ${(props) =>
    props.variant === 'done'
      ? props.theme['green-300']
      : props.theme['red-500']};
`
