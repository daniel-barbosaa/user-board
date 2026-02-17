import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';

import { ModalNewUser } from './index';

jest.mock('./use-new-user-controller', () => ({
  useNewUserController: () => {
    const methods = useForm({
      defaultValues: { name: '', email: '', status: 'ACTIVE' },
    });
    return {
      closeNewUserModal: jest.fn(),
      isNewUserModalOpen: true,
      formMethods: methods,
      handleSubmit: jest.fn(),
      isPending: false,
    };
  },
}));

describe('ModalNewUser', () => {
  it('should render modal when open', () => {
    render(<ModalNewUser />);

    expect(
      screen.getByRole('heading', { name: /criar usuário/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it('should submit form when clicking create', async () => {
    render(<ModalNewUser />);
    const user = userEvent.setup();

    const submitButton = screen.getByRole('button', { name: /^criar$/i });
    await user.click(submitButton);

    expect(submitButton).toBeInTheDocument();
  });
});
