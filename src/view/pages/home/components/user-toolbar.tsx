import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, InputAdornment, Paper, TextField } from '@mui/material';

import { useUsers } from '../users-context';

import { ModalNewUser } from './modals/new-user-modal';

export function UserToolbar() {
  const { openNewUserModal } = useUsers();
  return (
    <>
      <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <TextField
            label="Buscar usuários"
            variant="outlined"
            placeholder="Buscar por nome..."
            fullWidth
            size="small"
            sx={{ flex: 1, minWidth: 250 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="action" />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            variant="contained"
            size="medium"
            sx={{
              gap: '8px',
            }}
            onClick={openNewUserModal}
          >
            <AddIcon />
            Novo Usuário
          </Button>
        </Box>
      </Paper>
      <ModalNewUser />
    </>
  );
}
