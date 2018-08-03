import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from './models/RootStore';

const store = RootStore.create({
    users: {
      "1": {
        id: "1",
        name: "BMorris"
      },
      "2": {
        id: "2",
        name: "RMorris"
      },
      "3": {
        id: "3",
        name: "johndoe"
      }
    },
    todos: {
      "1": {
        name: "Eat a cake",
        done: true
      }
    }
  });


ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();