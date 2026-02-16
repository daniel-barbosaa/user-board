import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useUserManagement } from '../../users-context';
import { ModalEditUser } from '../modals/edit-user-modal';

import { SkeletonUserTable } from './skeleton-user-table';
import { useUsersController } from './use-users-controller';

export function UsersTable() {
  const { openEditUserModal } = useUserManagement();
  const { users, isLoading } = useUsersController();

  if (!isLoading && users.length === 0) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={5}
      >
        <Typography variant="h6">Nenhum usuário cadastrado!</Typography>
        <Typography variant="body2" color="text.secondary">
          Cadastre o primeiro usuário para começar.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Paper elevation={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.100' }}>
                <TableCell sx={{ fontWeight: 600 }}>Nome</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <SkeletonUserTable />
              ) : (
                users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      '&:hover': { bgcolor: 'grey.50', cursor: 'pointer' },
                    }}
                    onClick={() => openEditUserModal(user)}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip
                        icon={
                          user.status === 'ACTIVE' ? (
                            <CheckCircleIcon fontSize="small" />
                          ) : (
                            <CancelIcon fontSize="small" />
                          )
                        }
                        label={user.status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
                        color={user.status === 'ACTIVE' ? 'success' : 'error'}
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ModalEditUser />
    </>
  );
}
