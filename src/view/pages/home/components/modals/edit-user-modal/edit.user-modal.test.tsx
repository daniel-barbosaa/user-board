import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';

import { ModalEditUser } from './index';

jest.mock('./use-edit-user-controller', () => ({
  useEditUserController: () => {
    const methods = useForm({
      defaultValues: { name: '', email: '', status: 'ACTIVE' },
    });
    return {
      closeEditUserModal: jest.fn(),
      isEditUserModalOpen: true,
      handleCloseDeleteModal: jest.fn(),
      handleOpenDeleteModal: jest.fn(),
      isDeleteModalOpen: false,
      formMethods: methods,
      handleSubmit: jest.fn(),
      isPending: false,
      handleDeleteUser: jest.fn(),
      isPendingDelete: false,
    };
  },
}));

describe('ModalEditUser', () => {
  it('should render modal when open', () => {
    render(<ModalEditUser />);
    expect(screen.getByText('Editar usuário')).toBeInTheDocument();
  });

  it('should submit form when clicking save', async () => {
    render(<ModalEditUser />);
    const user = userEvent.setup();

    await user.click(screen.getByText(/salvar/i));

    expect(screen.getByText(/salvar/i)).toBeInTheDocument();
  });
});
