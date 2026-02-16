import { useState } from 'react';

import { useUsers } from '../../../users-context';

export function useEditUserController() {
  const { isEditUserModalOpen, closeEditUserModal, openEditUserModal } =
    useUsers();
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
  };
}
