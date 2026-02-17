import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

import type { User } from '../../../app/types/user';

interface UserManagementContextValue {
  isNewUserModalOpen: boolean;
  openNewUserModal(): void;
  closeNewUserModal(): void;
  isEditUserModalOpen: boolean;
  openEditUserModal(user: User): void;
  closeEditUserModal(): void;
  userBeingEdit: null | User;
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
  const [userBeingEdit, setUserBeingEdit] = useState<null | User>(null);

  const openNewUserModal = useCallback(() => {
    setIsNewModalOpen(true);
  }, []);

  const closeNewUserModal = useCallback(() => {
    setIsNewModalOpen(false);
  }, []);

  const openEditUserModal = useCallback((user: User) => {
    setIsEditModalOpen(true);
    setUserBeingEdit(user);
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
        userBeingEdit,
      }}
    >
      {children}
    </UserManagementContext.Provider>
  );
}

export function useUserManagement() {
  const context = useContext(UserManagementContext);
  if (!context)
    throw new Error(
      'useUserManagement must be used within UserManagementContextProvider',
    );
  return context;
}
