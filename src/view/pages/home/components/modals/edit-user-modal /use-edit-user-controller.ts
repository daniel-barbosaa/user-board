import { useState } from 'react';

import { useUserManagement } from '../../../users-context';

export function useEditUserController() {
  const { isEditUserModalOpen, closeEditUserModal, openEditUserModal } =
    useUserManagement();
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
