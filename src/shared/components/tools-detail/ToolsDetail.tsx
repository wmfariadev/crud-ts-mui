import { ReactNode } from 'react'
import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'

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
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

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
            <Typography variant='button' noWrap>
              Salvar
            </Typography>
          </Button>

        )}
      {showSaveButtonLoading && (<Skeleton width={110} height={60} />)}

      {(showSaveCloseButton && !showSaveCloseButtonLoading && !smDown && !mdDown) &&
        (
          <Button
            onClick={onClickSaveCloseButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>save</Icon>}>
            <Typography variant='button' noWrap>
              Salvar e Fechar
            </Typography>
          </Button>

        )}
      {(showSaveCloseButtonLoading && !smDown && !mdDown) && (<Skeleton width={178} height={60} />)}

      {(showDeleteButton && !showDeleteButtonLoading) &&
        (
          <Button
            onClick={onClickDeleteButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>delete</Icon>}>
            <Typography variant='button' noWrap>
              Apagar
            </Typography>
          </Button>

        )}
      {showDeleteButtonLoading && (<Skeleton width={110} height={60} />)}

      {(showNewButton && !showNewButtonLoading && !smDown) &&
        (
          <Button
            onClick={onClickNewButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>add</Icon>}>
            <Typography variant='button' noWrap>
              {textNewButton}
            </Typography>
          </Button>

        )}
      {(showNewButtonLoading && !smDown && !mdDown) && (<Skeleton width={110} height={60} />)}

      <Divider variant='middle' orientation='vertical' />

      {showBackButton &&
        (
          <Button
            onClick={onClickBackButton}
            color='primary'
            disableElevation
            variant='outlined'
            startIcon={<Icon>arrow_back</Icon>}>
            <Typography variant='button' noWrap>
              Voltar
            </Typography>
          </Button>

        )}
    </Box>
  )
}