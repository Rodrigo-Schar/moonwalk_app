import { useMyTheme, useApp } from '@/hooks';
import { ColorContextProvider as ColorContext, AppContextProvider as AppContext } from '@/shared';
import { AppNavigation } from '@/navigation';
import { Loading } from '@/components';
import { Provider } from 'react-redux';
import store from '@/store';

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
    <Provider store={store}>
      <AppContext value={app}>
        <ColorContext value={theme}>
          <AppNavigation />
          <SharedLoading />
        </ColorContext>
      </AppContext>
    </Provider>
  );
};

export default Home;