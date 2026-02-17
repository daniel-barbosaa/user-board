import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

import {
  ThemeModeContext,
  ThemeModeContextProvider,
} from './app/contexts/theme-context';
import { UnexpectedError } from './view/pages/components/unexpected-error';
import Home from './view/pages/home';
import { UserManagementContextProvider } from './view/pages/home/users-context';
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserManagementContextProvider>
          <ThemeModeContextProvider>
            <ThemeModeContext.Consumer>
              {({ mode }) => (
                <>
                  <CssBaseline />
                  <Toaster
                    toastOptions={{
                      style: {
                        background: mode === 'dark' ? '#333' : '#fff',
                        color: mode === 'dark' ? '#fff' : '#000',
                      },
                    }}
                  />
                  <ErrorBoundary FallbackComponent={UnexpectedError}>
                    <Home />
                  </ErrorBoundary>
                </>
              )}
            </ThemeModeContext.Consumer>
          </ThemeModeContextProvider>
        </UserManagementContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
