import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { Content, Overlay, CloseButton } from './styles'

export function TaskModel() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Matéria UOL</Dialog.Title>
      </Content>
    </Dialog.Portal>
  )
}
