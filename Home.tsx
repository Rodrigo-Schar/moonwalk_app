import { useMyTheme, useApp } from '@/hooks';
import {
  ColorContextProvider as ColorContext,
  AppContextProvider as AppContext
} from '@/shared';
import { AppNavigation } from '@/navigation';

const Home = () => {
  const theme = useMyTheme();
  const app = useApp();

  return (
    <AppContext value={app}>
      <ColorContext value={theme}>
        <AppNavigation />
      </ColorContext>
    </AppContext>
  );
};

export default Home;