import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { UserToolbar } from './components/user-toolbar';
import { UsersTable } from './components/users/user-table';
import { useUsersController } from './use-users-controller';

export default function Home() {
  const { users, isLoading, order, handleSort, setSearch, search, totalUsers } =
    useUsersController();
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Gerenciamento de usuários
        </Typography>

        <UserToolbar search={search} setSearch={setSearch} />

        <UsersTable
          users={users}
          isLoading={isLoading}
          order={order}
          handleSort={handleSort}
          totalUsers={totalUsers}
          search={search}
        />
      </Container>
    </Box>
  );
}
