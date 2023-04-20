import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

export function render(url: string, options?: object) {
  return ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    options
  );
}
