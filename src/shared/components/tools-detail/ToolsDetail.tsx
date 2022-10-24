import { ReactNode } from 'react'
import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from '@mui/material'

interface IToolsDetailProps {
  children?: ReactNode
  textNewButton?: string
  showNewButton?: boolean
  showBackButton?: boolean
  showDeleteButton?: boolean
  showSaveButton?: boolean
  showSaveCloseButton?: boolean

  showNewButtonLoading?: boolean
  showBackButtonLoading?: boolean
  showDeleteButtonLoading?: boolean
  showSaveButtonLoading?: boolean
  showSaveCloseButtonLoading?: boolean

  onClickNewButton?: () => void
  onClickBackButton?: () => void
  onClickDeleteButton?: () => void
  onClickSaveButton?: () => void
  onClickSaveCloseButton?: () => void
}

export const ToolsDetail: React.FC<IToolsDetailProps> = ({
  textNewButton = 'Novo',
  showNewButton = true,
  showBackButton = true,
  showDeleteButton = true,
  showSaveButton = true,
  showSaveCloseButton = false,
  showNewButtonLoading = false,
  showBackButtonLoading = false,
  showDeleteButtonLoading = false,
  showSaveButtonLoading = false,
  showSaveCloseButtonLoading = false,
  onClickNewButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSaveButton,
  onClickSaveCloseButton
}: IToolsDetailProps) => {

  const theme = useTheme()

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}>
      {(showSaveButton && !showSaveButtonLoading) &&
        (
          <Button
            onClick={onClickSaveButton}
            color='primary'
            disableElevation
            variant='contained'
            startIcon={<Icon>save</Icon>}>
            Salvar
          </Button>

        )}
      {showSaveButtonLoading && (<Skeleton width={110} height={60} />)}

      {(showSaveCloseButton && !showSaveCloseButtonLoading) &&
        (
          <Button
            onClick={onClickSaveCloseButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>save</Icon>}>
            Salvar e Voltar
          </Button>

        )}
      {showSaveCloseButtonLoading && (<Skeleton width={178} height={60} />)}

      {(showDeleteButton && !showDeleteButtonLoading) &&
        (
          <Button
            onClick={onClickDeleteButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>delete</Icon>}>
            Apagar
          </Button>

        )}
      {showDeleteButtonLoading && (<Skeleton width={110} height={60} />)}

      {(showNewButton && !showNewButtonLoading) &&
        (
          <Button
            onClick={onClickNewButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>add</Icon>}>
            {textNewButton}
          </Button>

        )}
      {showNewButtonLoading && (<Skeleton width={110} height={60} />)}

      <Divider variant='middle' orientation='vertical' />

      {showBackButton &&
        (
          <Button
            onClick={onClickBackButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>arrow_back</Icon>}>
            Voltar
          </Button>

        )}
    </Box>
  )
}