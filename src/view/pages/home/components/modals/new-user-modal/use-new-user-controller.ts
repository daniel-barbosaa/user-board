import { useUsers } from '../../../users-context';

export function useNewUser() {
  const { closeNewUserModal, openNewUserModal, isNewUserModalOpen } =
    useUsers();

  return { closeNewUserModal, openNewUserModal, isNewUserModalOpen };
}
