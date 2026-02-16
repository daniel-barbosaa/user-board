import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { UsersTable } from './components/user-table';
import { UserToolbar } from './components/user-toolbar';

export default function Home() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Gerenciamento de usuários
        </Typography>

        <UserToolbar />

        <UsersTable />
      </Container>
    </Box>
  );
}
