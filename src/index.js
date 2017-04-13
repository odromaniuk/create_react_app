import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import counter from './reducers';
import Counter from './components/Counter.jsx'

const store = createStore(counter);

ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,

    document.getElementById('root')
);
