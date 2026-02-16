import { useUsers } from '../../../../../app/hooks/use-users';

export function useUsersController() {
  const { users, isLoading } = useUsers();

  return { users, isLoading };
}
