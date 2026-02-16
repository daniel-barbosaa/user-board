import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface UsersContextValue {
  isNewUserModalOpen: boolean;
  openNewUserModal(): void;
  closeNewUserModal(): void;
}

export const UsersContext = createContext({} as UsersContextValue);

export function UsersContextProvider({ children }: { children: ReactNode }) {
  const [isNewUserModalOpen, setIsNewModalOpen] = useState(true);

  const openNewUserModal = useCallback(() => {
    setIsNewModalOpen(true);
  }, []);

  const closeNewUserModal = useCallback(() => {
    setIsNewModalOpen(false);
  }, []);
  return (
    <UsersContext.Provider
      value={{ isNewUserModalOpen, openNewUserModal, closeNewUserModal }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
