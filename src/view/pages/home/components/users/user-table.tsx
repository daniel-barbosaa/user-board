import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { useUserManagement } from '../../users-context';
import { ModalEditUser } from '../modals/edit-user-modal ';

import { SkeletonUserTable } from './skeleton-user-table';
import { useUsersController } from './use-users-controller';

export function UsersTable() {
  const { openEditUserModal } = useUserManagement();
  const { users, isLoading } = useUsersController();
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
                users.map((usuario) => (
                  <TableRow
                    key={usuario.id}
                    sx={{
                      '&:hover': { bgcolor: 'grey.50', cursor: 'pointer' },
                    }}
                    onClick={openEditUserModal}
                  >
                    <TableCell>{usuario.name}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>
                      <Chip
                        label={usuario.status}
                        color={
                          usuario.status === 'ACTIVE' ? 'success' : 'default'
                        }
                        size="small"
                        sx={{ fontWeight: 500 }}
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
