import { useUserManagement } from '../../../users-context';

export function useNewUserController() {
  const { closeNewUserModal, openNewUserModal, isNewUserModalOpen } =
    useUserManagement();

  return { closeNewUserModal, openNewUserModal, isNewUserModalOpen };
}
