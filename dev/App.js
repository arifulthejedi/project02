import Field from './game/play-ground';
import Card from './game/front';
import Popup from './game/popup';
import { Provider } from 'react-redux';
import Store from './game/states/store';
import Header from './game/header';
import Footer from './game/footer';

export default function App() {


  return (
    <>
      <Header />
      <div id="main-container">
        <Provider store={Store}>
          <Card />
          <Field />
          <Popup />
        </Provider>
      </div>
      <Footer />
    </>
  );
}

