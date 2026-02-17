import { Box, Typography } from '@mui/material';

export function EmptyState() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      py={5}
    >
      <Typography variant="h6">Nenhum usuário cadastrado!</Typography>
      <Typography variant="body2">
        Cadastre o primeiro usuário para começar.
      </Typography>
    </Box>
  );
}
