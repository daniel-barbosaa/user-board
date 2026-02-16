import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface UserManagementContextValue {
  isNewUserModalOpen: boolean;
  openNewUserModal(): void;
  closeNewUserModal(): void;
  isEditUserModalOpen: boolean;
  openEditUserModal(): void;
  closeEditUserModal(): void;
}

export const UserManagementContext = createContext(
  {} as UserManagementContextValue,
);

export function UserManagementContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isNewUserModalOpen, setIsNewModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditModalOpen] = useState(false);

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
    <UserManagementContext.Provider
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
    </UserManagementContext.Provider>
  );
}

export function useUserManagement() {
  return useContext(UserManagementContext);
}
