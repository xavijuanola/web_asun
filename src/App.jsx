import { useMemo } from 'react';
import LandingPage from './components/LandingPage';
import StoreApp from './StoreApp';
import RompedorStoreApp from './RompedorStoreApp';

function App() {
  const isStore = useMemo(() => {
    const pathname = window.location.pathname;
    return pathname.includes('/web_asun/') &&
           !pathname.endsWith('/') ||
           pathname.includes('/allbirds/') ||
           pathname.includes('/lush/') ||
           pathname.includes('/away/') ||
           pathname.includes('/bando/') ||
           pathname.includes('/rompedor/');
  }, []);

  const isRompedor = useMemo(() => {
    return window.location.pathname.includes('/rompedor/');
  }, []);

  // If in a variant path, render appropriate store
  if (isStore) {
    return isRompedor ? <RompedorStoreApp /> : <StoreApp />;
  }

  // Otherwise render landing page
  return <LandingPage />;
}

export default App;
