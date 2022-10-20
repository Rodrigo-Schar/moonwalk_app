import { useMyTheme, useApp } from '@/hooks';
import { ColorContextProvider as ColorContext, AppContextProvider as AppContext } from '@/shared';
import { AppNavigation } from '@/navigation';
import { Loading } from '@/components';

const Home = () => {
  const theme = useMyTheme();
  const app = useApp();

  const SharedLoading = () => {
    if (app.isBusy) {
      return <Loading />;
    }

    return null;
  }

  return (
    <AppContext value={app}>
      <ColorContext value={theme}>
        <AppNavigation />
        <SharedLoading />
      </ColorContext>
    </AppContext>
  );
};

export default Home;