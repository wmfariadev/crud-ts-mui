import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toogleDrawerOpen: () => void
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

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldIsDrawerOpen => !oldIsDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}