import { useUsers } from '../../../users-context';

export function useNewUserController() {
  const { closeNewUserModal, openNewUserModal, isNewUserModalOpen } =
    useUsers();

  return { closeNewUserModal, openNewUserModal, isNewUserModalOpen };
}
