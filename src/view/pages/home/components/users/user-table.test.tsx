import { render, screen } from '@testing-library/react';

import { UsersTable } from './user-table';

describe('UsersTable', () => {
  it('renders empty state when no users', () => {
    render(
      <UsersTable
        users={[]}
        isLoading={false}
        order="asc"
        handleSort={jest.fn()}
        totalUsers={0}
        search=""
      />,
    );

    expect(screen.getByText('Nenhum usuário cadastrado!')).toBeInTheDocument();
  });
});
