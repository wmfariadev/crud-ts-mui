import { ReactNode } from 'react'
import { Search } from '@mui/icons-material'
import {
  Box,
  Paper,
  Button,
  useTheme,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Icon
} from '@mui/material'

import { Environment } from '../../environment'

interface IToolsListProps {
  children?: ReactNode
  textSearch?: string
  showInputSearch?: boolean
  onChangeTextSearch?: (newText: string) => void
  textNewButton?: string
  showNewButton?: boolean
  handleClickNewButton?: () => void
}

export const ToolsList: React.FC<IToolsListProps> = ({
  textSearch = '',
  showInputSearch = false,
  onChangeTextSearch,
  textNewButton = 'Novo',
  showNewButton = false,
  handleClickNewButton
}: IToolsListProps) => {
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

      {showInputSearch && (<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search" size='small'>{Environment.SEARCH_INPUT}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          type={'text'}
          size='small'
          label={Environment.SEARCH_INPUT}
          value={textSearch}
          onChange={(e) => onChangeTextSearch?.(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="pesquisar" edge="end">
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>)}

      <Box flex={1} display='flex' justifyContent='end'>
        {showNewButton && (<Button
          onClick={handleClickNewButton}
          color='primary'
          disableElevation
          variant='contained'
          startIcon={<Icon>add</Icon>}>
          {textNewButton}
        </Button>)}
      </Box>

    </Box>
  )
}