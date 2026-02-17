import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { User } from '../../../../../app/types/user';
import { useUserManagement } from '../../users-context';

import { UsersTable } from './user-table';
jest.mock('../../../../../app/utils/env', () => ({
  ENV: {
    API_URL: '',
  },
}));

jest.mock('../../users-context', () => ({
  useUserManagement: jest.fn(),
}));

describe('UsersTable Integration', () => {
  const openEditUserModalMock = jest.fn();
  const queryClient = new QueryClient();

  beforeEach(() => {
    jest.clearAllMocks();
    (useUserManagement as jest.Mock).mockReturnValue({
      openEditUserModal: openEditUserModalMock,
    });
  });

  function renderWithQueryClient(ui: React.ReactElement) {
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    );
  }

  it('renders the user list', () => {
    const users: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        status: 'ACTIVE',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        status: 'INACTIVE',
      },
    ];

    renderWithQueryClient(
      <UsersTable
        users={users}
        handleSort={() => {}}
        isLoading={false}
        order="asc"
        totalUsers={users.length}
      />,
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('calls openEditUserModal when clicking a user row', async () => {
    const users: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        status: 'ACTIVE',
      },
    ];

    renderWithQueryClient(
      <UsersTable
        users={users}
        handleSort={() => {}}
        isLoading={false}
        order="asc"
        totalUsers={users.length}
      />,
    );

    const user = userEvent.setup();
    await user.click(screen.getByText('John Doe'));

    expect(openEditUserModalMock).toHaveBeenCalledWith(users[0]);
  });
});
