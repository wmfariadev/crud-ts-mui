import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'

interface IDrawerOptions {
  path: string
  icon: string
  label: string
}

interface IDrawerContextData {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOptions[]
  toogleDrawerOpen: () => void
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

interface IDrawerProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: FC<IDrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toogleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  )
}