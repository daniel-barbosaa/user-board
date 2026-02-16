import { useMemo, useState } from 'react';

import { useUsers } from '../../../app/hooks/use-users';

export function useUsersController() {
  const { users, isLoading } = useUsers();
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');
  const handleSort = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );

    return [...filtered].sort((a, b) =>
      order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );
  }, [users, search, order]);

  return {
    users: filteredAndSortedUsers,
    totalUsers: users.length,
    isLoading,
    setSearch,
    filteredAndSortedUsers,
    handleSort,
    order,
    search,
  };
}
