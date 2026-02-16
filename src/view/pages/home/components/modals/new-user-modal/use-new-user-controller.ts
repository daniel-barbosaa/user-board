import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { QUERY_CACHE_KEYS } from '../../../../../../app/constants/cache';
import { userService } from '../../../../../../app/services/user-services';
import type { CreateUsersParams } from '../../../../../../app/services/user-services/create';
import { useUserManagement } from '../../../users-context';

import {
  newUserFormDefaultValues,
  type NewUserFormSchema,
  newUserFormSchema,
} from './new-user-schema';

export function useNewUserController() {
  const { closeNewUserModal, openNewUserModal, isNewUserModalOpen } =
    useUserManagement();
  const formMethods = useForm<NewUserFormSchema>({
    resolver: zodResolver(newUserFormSchema),
    defaultValues: newUserFormDefaultValues,
  });
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateUsersParams) => {
      return userService.create(data);
    },
  });
  const queryClient = useQueryClient();

  async function handleSubmit(data: NewUserFormSchema) {
    try {
      await mutateAsync(data);
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.users],
      });
      toast.success('Usuário cadastrado com sucesso!');
      closeNewUserModal();
      formMethods.reset();
    } catch {
      toast.error('Erro ao cadastrar usuário!');
    }
  }

  return {
    closeNewUserModal,
    openNewUserModal,
    isNewUserModalOpen,
    formMethods,
    handleSubmit,
    isPending,
  };
}
