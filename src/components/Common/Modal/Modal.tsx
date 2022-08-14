import React from 'react'
import { useTheme } from 'styled-components'
import Heading from '../Heading/Heading'
import getThemeValue from '../../../utils/getThemeValue'
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
} from './styles'
import { ModalProps } from './types'

const Modal: React.FC<ModalProps> = ({
  title = '',
  onDismiss,
  onBack,
  children,
  hideTitle = false,
  hideCloseButton = false,
  bodyPadding = '24px',
  headerBackground = 'transparent',
  minWidth = '320px',
  ...props
}) => {
  const theme = useTheme()
  return (
    <ModalContainer minWidth={minWidth} {...props}>
      {!hideTitle && (
        <ModalHeader
          background={getThemeValue(`colors.${headerBackground}`, headerBackground)(theme)}
        >
          <ModalTitle>
            {onBack && <ModalBackButton onBack={onBack} />}
            <Heading>{title}</Heading>
          </ModalTitle>
          {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
        </ModalHeader>
      )}
      <ModalBody p={bodyPadding}>{children}</ModalBody>
    </ModalContainer>
  )
}

export default Modal
