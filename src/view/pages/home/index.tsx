import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Container, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import { useThemeMode } from '../../../app/contexts/theme-context';

import { UserToolbar } from './components/user-toolbar';
import { UsersTable } from './components/users/user-table';
import { useUsersController } from './use-users-controller';

export default function Home() {
  const { users, isLoading, order, handleSort, setSearch, search, totalUsers } =
    useUsersController();
  const { toggleColorMode, mode } = useThemeMode();

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Gerenciamento de usuários
          <span>
            <Tooltip title="Alterar tema" sx={{ marginLeft: 2 }}>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </span>
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
