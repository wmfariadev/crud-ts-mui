import { ReactNode } from 'react'
import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material'

interface IToolsDetailProps {
  children?: ReactNode
  textNewButton?: string
  showNewButton?: boolean
  showBackButton?: boolean
  showDeleteButton?: boolean
  showSaveButton?: boolean
  showSaveCloseButton?: boolean
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
  onClickNewButton,
  onClickBackButton,
  onClickDeleteButton,
  onClickSaveButton,
  onClickSaveCloseButton
}: IToolsDetailProps) => {

  const theme = useTheme()

  return (
    <Box component={Paper}
      elevation={3}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      gap={1}
      alignItems='center'>
      {showSaveButton && (<Box>
        <Button
          onClick={onClickSaveButton}
          color='primary'
          disableElevation
          variant='contained'
          startIcon={<Icon>save</Icon>}>
          Salvar
        </Button>
      </Box>)}
      {showSaveCloseButton && (<Box>
        <Button
          onClick={onClickSaveCloseButton}
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>save</Icon>}>
          Salvar e Voltar
        </Button>
      </Box>)}
      {showDeleteButton && (<Box>
        <Button
          onClick={onClickDeleteButton}
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>delete</Icon>}>
          Apagar
        </Button>
      </Box>)}
      {showNewButton && (<Box>
        <Button
          onClick={onClickNewButton}
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>add</Icon>}>
          {textNewButton}
        </Button>
      </Box>)}

      <Divider variant='middle' orientation='vertical' />

      {showBackButton && (<Box>
        <Button
          onClick={onClickBackButton}
          color='primary'
          disableElevation
          variant='outlined'
          startIcon={<Icon>arrow_back</Icon>}>
          Voltar
        </Button>
      </Box>)}
    </Box>
  )
}