import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import {
  ThemeModeContext,
  ThemeModeContextProvider,
} from './app/contexts/theme-context';
import Home from './view/pages/home';
import { UserManagementContextProvider } from './view/pages/home/users-context';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserManagementContextProvider>
          <ThemeModeContextProvider>
            <CssBaseline />
            <ThemeModeContext.Consumer>
              {({ mode }) => (
                <Toaster
                  toastOptions={{
                    style: {
                      background: mode === 'dark' ? '#333' : '#fff',
                      color: mode === 'dark' ? '#fff' : '#000',
                    },
                  }}
                />
              )}
            </ThemeModeContext.Consumer>
            <Home />
          </ThemeModeContextProvider>
        </UserManagementContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
