import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import Home from './view/pages/home';
import { UserManagementContextProvider } from './view/pages/home/users-context';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserManagementContextProvider>
          <CssBaseline />
          <Toaster />
          <Home />
        </UserManagementContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
