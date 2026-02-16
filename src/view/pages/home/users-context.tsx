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
  isEditUserModalOpen: boolean;
  openEditUserModal(): void;
  closeEditUserModal(): void;
}

export const UsersContext = createContext({} as UsersContextValue);

export function UsersContextProvider({ children }: { children: ReactNode }) {
  const [isNewUserModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditModalOpen] = useState(true);

  const openNewUserModal = useCallback(() => {
    setIsNewModalOpen(true);
  }, []);

  const closeNewUserModal = useCallback(() => {
    setIsNewModalOpen(false);
  }, []);

  const openEditUserModal = useCallback(() => {
    setIsEditModalOpen(true);
  }, []);

  const closeEditUserModal = useCallback(() => {
    setIsEditModalOpen(false);
  }, []);

  return (
    <UsersContext.Provider
      value={{
        isNewUserModalOpen,
        openNewUserModal,
        closeNewUserModal,
        openEditUserModal,
        isEditUserModalOpen,
        closeEditUserModal,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
