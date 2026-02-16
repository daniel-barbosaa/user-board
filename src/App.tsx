import { CssBaseline } from '@mui/material';

import Home from './view/pages/home';
import { UsersContextProvider } from './view/pages/home/users-context';

function App() {
  return (
    <>
      <UsersContextProvider>
        <CssBaseline />
        <Home />
      </UsersContextProvider>
    </>
  );
}

export default App;
