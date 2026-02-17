import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, InputAdornment, Paper, TextField } from '@mui/material';

import { useUserManagement } from '../users-context';

import { ModalNewUser } from './modals/new-user-modal';

interface UserToolbarProps {
  search: string;
  setSearch: (search: string) => void;
  totalUsers: number;
}

export function UserToolbar({
  search,
  setSearch,
  totalUsers,
}: UserToolbarProps) {
  const { openNewUserModal } = useUserManagement();

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
          {totalUsers > 0 && (
            <TextField
              label="Buscar usuários"
              variant="outlined"
              placeholder="Buscar por nome..."
              fullWidth
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
          )}

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
