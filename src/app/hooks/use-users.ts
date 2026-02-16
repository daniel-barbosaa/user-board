import { useQuery } from '@tanstack/react-query';

import { QUERY_CACHE_KEYS } from '../constants/cache';
import { userService } from '../services/user-services';

export function useUsers() {
  const { data, isFetching } = useQuery({
    queryKey: [QUERY_CACHE_KEYS.users],
    queryFn: userService.getAll,
    staleTime: Infinity,
  });

  return {
    users: data ?? [],
    isLoading: isFetching,
  };
}
