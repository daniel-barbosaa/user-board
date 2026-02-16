import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { QUERY_CACHE_KEYS } from '../../../../../../app/constants/cache';
import { userService } from '../../../../../../app/services/user-services';
import type { UpdateUserParams } from '../../../../../../app/services/user-services/update';
import { useUserManagement } from '../../../users-context';
import { newUserFormSchema } from '../new-user-modal/new-user-schema';

import { type EditUserFormSchema } from './edit-user-schema';

export function useEditUserController() {
  const {
    isEditUserModalOpen,
    closeEditUserModal,
    openEditUserModal,
    userBeingEdit,
  } = useUserManagement();

  const formMethods = useForm<EditUserFormSchema>({
    resolver: zodResolver(newUserFormSchema),
    defaultValues: {
      email: userBeingEdit?.email,
      name: userBeingEdit?.name,
      status: userBeingEdit?.status,
    },
  });

  const { reset } = formMethods;

  useEffect(() => {
    if (userBeingEdit) {
      reset({
        email: userBeingEdit?.email,
        name: userBeingEdit?.name,
        status: userBeingEdit?.status,
      });
    }
  }, [userBeingEdit, reset]);

  const { isPending, mutateAsync: updateUser } = useMutation({
    mutationFn: async (data: UpdateUserParams) => {
      return userService.update(data);
    },
  });
  const queryClient = useQueryClient();

  async function handleSubmit(data: EditUserFormSchema) {
    try {
      await updateUser({
        ...data,
        id: userBeingEdit!.id,
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_CACHE_KEYS.users],
      });
      toast.success('Usuário editado com sucesso!');
      closeEditUserModal();
      formMethods.reset();
    } catch {
      toast.error('Erro ao editar usuário!');
    }
  }
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }
  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  return {
    isEditUserModalOpen,
    closeEditUserModal,
    openEditUserModal,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    formMethods,
    isPending,
    handleSubmit,
  };
}
