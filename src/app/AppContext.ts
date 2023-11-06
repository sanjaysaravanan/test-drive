import { createContext } from "react";

type ContextProps = {
  handleLoading: () => void,
}

const AppContext = createContext({} as ContextProps);

export default AppContext;