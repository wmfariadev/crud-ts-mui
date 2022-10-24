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

interface IToolsBarProps {
  children?: ReactNode
  textSearch?: string
  showInputSearch?: boolean
  onChangeTextSearch?: (newText: string) => void
}

export const ToolsBar: React.FC<IToolsBarProps> = ({
  textSearch = '',
  showInputSearch = false,
  onChangeTextSearch
}: IToolsBarProps) => {
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

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-search" size='small'>Pesquisar</InputLabel>
        <OutlinedInput
          id="outlined-adornment-search"
          type={'text'}
          size='small'
          label="Pesquisar"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="pesquisar" edge="end">
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Box flex={1} display='flex' justifyContent='end'>
        <Button
          color='primary'
          disableElevation
          variant='contained'
          startIcon={<Icon>add</Icon>}>
          Novo
        </Button>
      </Box>

    </Box>
  )
}